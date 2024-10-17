"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class RegistrationRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const registrationController = new controller_1.RegistrationController();
        router.get("/", registrationController.allRegistration);
        router.get("/:id", registrationController.getRegistration);
        router.post("/", registrationController.createRegistration);
        router.put("/:id", registrationController.updateRegistration);
        router.delete("/:id", registrationController.deleteRegistration);
        return router;
    }
}
exports.RegistrationRoutes = RegistrationRoutes;
