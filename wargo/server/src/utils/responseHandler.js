export const sendSuccess = (res, { status = 200, message = "OK", data }) =>
	res.status(status).json({ success: true, message, data });

export const sendError = (
	res,
	{ status = 500, message = "Server Error", errors }
) => res.status(status).json({ success: false, message, errors });
