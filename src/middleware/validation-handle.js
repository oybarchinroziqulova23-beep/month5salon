import { ApiError } from "../utils/custom-error.js";

export const validate = (schema) => {
    return (req, _res, next) => {
        const { error } = schema.validate(req.body);

        if (error) {
            throw new ApiError(error.details[0].message, 400);
        }

        next();
    };
};
