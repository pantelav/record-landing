const bot = require("../bot");
const { BotModel } = require("../models/BotSchema");
const formatPhone = require("../helpers/formatPhone");

function createMessage(order) {
	for (let key in order) {
		if (order[key].includes("+")) {
			order[key] = order[key].replace(/\+/g, "\\+");
		}
	}
	return `<b>Новая заявка</b> 📍

    <b>Имя:</b> ${order.name}

    <b>Телефон:</b> ${formatPhone(order.phone)}

    <b>Дата рождения:</b> ${order?.date || ''}
    
    <b>Дополнения:</b> ${order?.notes || ''}`;
}

module.exports = async function (req, res, next) {
	try {
		const order = req.body;
		const users = await BotModel.find();
		users.forEach((user) => {
      try {
        bot.telegram.sendMessage(user.chatId, createMessage(order), { parse_mode: "HTML" });
      } catch (error) {
        console.log('Telegram sending error');
        console.log(error);
        
      }
		});
	} catch (error) {
		console.log("Ошибка отправки сообщения ботом");
		console.log(error);
	}
	next();
};
