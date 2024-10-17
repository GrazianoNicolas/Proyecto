import { Router } from "express";
import { TeacheController } from "./TeacherController";

export class TeacheRoutes {
  static get routes(): Router {
    const router = Router();
    const teacheController = new TeacheController();

    router.get("/", teacheController.allTeache);
    router.get("/:id", teacheController.getTeache);
    router.post("/", teacheController.createTeache);
    router.delete("/:id", teacheController.deleteTeache);
    router.put("/:id", teacheController.updateTeache);

    return router;
  }
}