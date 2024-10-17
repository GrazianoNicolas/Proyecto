import { Router } from "express";
import { StudentController } from "./controller";

export class StudentRoutes {
  static get routes(): Router {
    const router = Router();
    const studentController = new StudentController();

    router.get("/", studentController.allStudents);
    router.get("/:id", studentController.getStudent);
    // router.post("/", studentController.createStudent);
    // router.put("/:id", studentController.updateStudent);
    router.delete("/:id", studentController.deleteStudent);

    return router;
  }
}