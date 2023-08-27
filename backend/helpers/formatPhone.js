module.exports = (phone) => {
	if (phone.startsWith("\\+")) return phone;
	if (phone.startsWith("8")) return "\\+7" + phone.substring(1);
	if (phone.startsWith("9")) return "\\+7" + phone;
	return phone;
};
