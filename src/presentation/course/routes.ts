import { Router } from "express";
import { CourseController } from "./controller";

export class CourseRoutes {
  static get routes(): Router {
    const router = Router();
    const courseController = new CourseController();

    router.get("/", courseController.allCourse);
    router.get("/:id", courseController.getCourse);
    router.post("/", courseController.createCourse);
     router.put("/:id", courseController.updateCourse);
    router.delete("/:id", courseController.deleteCourse);

    return router;
  }
}