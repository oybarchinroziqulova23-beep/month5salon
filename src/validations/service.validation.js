import Joi from "joi";

class ServiceValidator {
    create(data) {
        const service = Joi.object({
            title: Joi.string().required(),
            price: Joi.number().required(),
            duration: Joi.number().required(),
            exampleImage: Joi.string().optional(),
            salonId: Joi.string().required()
        });
        return service.validate(data);
    }

    update(data) {
        const service = Joi.object({
            title: Joi.string().optional(),
            price: Joi.number().optional(),
            duration: Joi.number().optional(),
            exampleImage: Joi.string().optional(),
            salonId: Joi.string().optional()
        });
        return service.validate(data);
    }
}

export default new ServiceValidator();