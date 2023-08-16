const handleHttpError = (res, message = "There was an error", code = 403) => {
	res.status(code);
	res.send({ error: message });
};

module.exports = { handleHttpError };
