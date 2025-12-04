import { BaseController } from "./base.controller.js";
import { Salon } from "../schemas/salon.model.js";

class SalonController extends BaseController {
    constructor() {
        super(Salon, "ownerId"); // ownerni populate qilamiz
    }
}

export default new SalonController();
