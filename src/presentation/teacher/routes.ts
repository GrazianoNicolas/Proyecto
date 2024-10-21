import { Router } from "express";
import { TeacheController } from "./controller";
import { TeacherDatasourceImpl } from "../../infrastructure/datasource/teacher.datasource.imple";
import { TeacherRepositoryImpl } from "../../infrastructure/repository/teacher.repository.impl";

export class TeacheRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new TeacherDatasourceImpl();
    const teacherRepository = new TeacherRepositoryImpl(datasource);
    const teacheController = new TeacheController(teacherRepository);

    router.get("/", teacheController.allTeache);
    router.get("/:id", teacheController.getTeache);
    router.post("/", teacheController.createTeache);
    router.delete("/:id", teacheController.deleteTeache);
    router.put("/:id", teacheController.updateTeache);

    return router;
  }
}