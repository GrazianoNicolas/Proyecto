import { Router } from "express";
import { CourseController } from "./controller";
import { CourseRepositoryImpl } from "../../infrastructure/repository/course.repository.impl";
import { CourseDatasourceImpl } from "../../infrastructure/datasource/course.satasource.impl";

export class CourseRoutes {
  static get routes(): Router {
    const router = Router();


    const datasource = new CourseDatasourceImpl();
    const courseRepository = new CourseRepositoryImpl(datasource);
    const courseController = new CourseController(courseRepository);

    router.get("/", courseController.allCourse);
    router.get("/:id", courseController.getCourse);
    router.post("/", courseController.createCourse);
     router.put("/:id", courseController.updateCourse);
    router.delete("/:id", courseController.deleteCourse);

    return router;
  }
}