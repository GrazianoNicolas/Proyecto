import { Router } from "express";
import { RegistrationController } from "./controller";
import { RegistrationDatasourceImpl } from "../../infrastructure/datasource/registration.datasource.impl";
import { RegistrationRepositoryImpl } from "../../infrastructure/repository/registration.repository.impl";

export class RegistrationRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new RegistrationDatasourceImpl();
    const registrationRepository = new RegistrationRepositoryImpl(datasource);
    const registrationController = new RegistrationController(
      registrationRepository
    );

    router.get("/", registrationController.allRegistration);
    router.get("/:id", registrationController.getRegistration);
    router.post("/", registrationController.createRegistration);
    router.put("/:id", registrationController.updateRegistration);
    router.delete("/:id", registrationController.deleteRegistration);

    return router;
  }
}