import Joi from "joi";

export const salonSchema = Joi.object({
    salonName: Joi.string().required(),
    ownerId: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.string().required(),
    description: Joi.string().optional()
});
