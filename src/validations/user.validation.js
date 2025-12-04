import Joi from "joi";

export const userSchema = Joi.object({
    fullname: Joi.string().required(),
    phone: Joi.string().required(),
    role: Joi.string().valid("salonchi", "client").default("client")
});
