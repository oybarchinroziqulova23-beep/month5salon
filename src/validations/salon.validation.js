import Joi from "joi";

class SalonValidator {
    create(data) {
        const salon = Joi.object({
            salonName: Joi.string().required(),
            ownerId: Joi.string().required(),
            address: Joi.string().required(),
            phone: Joi.string().required(),
            description: Joi.string().optional(),
            image: Joi.string().required(),
        });
        return salon.validate(data);
    }

    update(data) {
        const salon = Joi.object({
            salonName: Joi.string().optional(),
            ownerId: Joi.string().optional(),
            address: Joi.string().optional(),
            phone: Joi.string().optional(),
            description: Joi.string().optional(),
            image: Joi.string().optional(),
        });
        return salon.validate(data);
    }
}

export default new SalonValidator();