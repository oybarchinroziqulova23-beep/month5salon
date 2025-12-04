import { BaseController } from "./base.controller.js";
import { Service } from "../schemas/service.model.js";

class ServiceController extends BaseController {
    constructor() {
        super(Service, "salonId"); // xizmat salon bilan boglanadi
    }
}

export default new ServiceController();
