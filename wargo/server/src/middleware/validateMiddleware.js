import { AppError } from "../utils/appError.js";

export const validate = (schema) => (req, res, next) => {
	const result = schema.safeParse({
		body: req.body,
		params: req.params,
		query: req.query,
	});

	if (!result.success) {
		return next(new AppError(400, "Validation error", result.error.flatten()));
	}

	req.validated = result.data;
	return next();
};
