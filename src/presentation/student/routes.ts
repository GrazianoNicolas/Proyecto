import { Router } from "express";
import { StudentController } from "./controller";
import { StudentDatasourceImpl } from "../../infrastructure/datasource/student.datasource.imple";
import { StudentRepositoryImpl } from "../../infrastructure/repository/student.repository.impl";

export class StudentRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource=new StudentDatasourceImpl();
    const studentRepository= new StudentRepositoryImpl(datasource);
    const studentController = new StudentController(studentRepository);

    router.get("/", studentController.allStudents);
    router.get("/:id", studentController.getStudent);
    router.post("/", studentController.createStudent);
    router.put("/:id", studentController.updateStudent);
    router.delete("/:id", studentController.deleteStudent);

    return router;
  }
}