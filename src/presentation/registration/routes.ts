import { Router } from "express";
import { RegistrationController } from "./controller";

export class RegistrationRoutes {
  static get routes(): Router {
    const router = Router();
    const registrationController = new RegistrationController();

    router.get("/", registrationController.allRegistration);
    router.get("/:id", registrationController.getRegistration);
    router.post("/", registrationController.createRegistration);
    router.put("/:id", registrationController.updateRegistration);
    router.delete("/:id", registrationController.deleteRegistration);

    return router;
  }
}