exports.ErrorResponse = function (res, msg, status_code = 500) {
	var data = {
		status: 0,
		message: msg,
		data:[]
	};
	return res.status(status_code).json(data);
};

exports.successResponse = function (res, msg) {
	var data = {
		status: 1,
		message: msg
	};
	return res.status(200).json(data);
};

exports.validationErrorWithData = function (res, msg, data) {
	var resData = {
		status: 0,
		message: msg,
		data: data
	};
	return res.status(400).json(resData);
};