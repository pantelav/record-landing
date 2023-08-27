require("dotenv").config();
const { Telegraf, Markup, Scenes, session } = require("telegraf");
const { enter, leave } = Scenes.Stage;
const { BotModel } = require("./models/BotSchema");

const bot = new Telegraf(process.env.BOT_TOKEN);

const loginScene = new Scenes.BaseScene("login");
loginScene.enter((ctx) => ctx.reply("Введите пароль"));
loginScene.leave((ctx) => ctx.reply("Вы авторизованы, ждите заявки"));
loginScene.on("text", async (ctx) => {
	try {
		if (ctx.message.text == process.env.BOT_PASSWORD) {
			const chatId = ctx.message.chat.id;
			const userName = ctx.message.from.username;
			await BotModel.create({ chatId, userName });
			ctx.scene.leave();
		} else {
			ctx.reply("Ошибка");
		}
	} catch (error) {
		ctx.reply("Ошибка сервера");
	}
});

const stage = new Scenes.Stage([loginScene], { ttl: 10 });
bot.use(session());
bot.use(stage.middleware());

bot.command("start", async (ctx) => {
	try {
		let chatId = ctx.message.chat.id;
		const user = await BotModel.findOne({ chatId }).exec();
		if (user) {
			return ctx.reply("Вы уже авторизованы", Markup.keyboard(["/exit"]).resize());
		} else {
			ctx.scene.enter("login");
		}
	} catch (error) {
		console.log(error);
	}
});

bot.command("exit", async (ctx) => {
	try {
		let chatId = ctx.message.chat.id;
		const deleteUser = await BotModel.deleteOne({ chatId });
		deleteUser.deletedCount ? ctx.reply("Вы отписались от уведомлений") : ctx.reply("Вы не авторизованы");
	} catch (error) {
		console.log(error);
		return ctx.reply("Ошибка сервера");
	}
});

bot
	.launch()
	.then(() => {
		console.log("Bot Launched");
	})
	.catch((err) => {
		console.log("Bot error: " + err);
	});

module.exports = bot;

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
