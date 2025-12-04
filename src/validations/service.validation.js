import Joi from "joi";

export const serviceSchema = Joi.object({
    title: Joi.string().required(),
    price: Joi.number().required(),
    duration: Joi.number().required(),
    salonId: Joi.string().required()
});
