module.exports = (req, res, next) => {
  try {
		if (!req.body.name && !req.body.phone) return res.status(400).json({ message: "Bad request" });

		res.status(200).json({ message: "Created" });
    next()
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "Internal Error" });
	}
}