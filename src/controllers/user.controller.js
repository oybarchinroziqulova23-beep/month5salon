import { BaseController } from "./base.controller.js";
import { User } from "../schemas/user.schema.js";

class UserController extends BaseController {
    constructor() {
        super(User, null); // populate keremas
    }
}

export default new UserController();
