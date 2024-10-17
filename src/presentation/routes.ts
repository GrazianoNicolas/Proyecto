import { Router } from "express";
import { TeacheRoutes } from "./teacher/routes";
import { RegistrationRoutes } from "./registration/routes";
import { CourseRoutes } from "./course/routes";
import { StudentRoutes } from "./student/routes";



export class AppRoutes{

static get routes():Router{


const router=Router();

router.use("/api/estudiantes", StudentRoutes.routes);
router.use("/profesores", TeacheRoutes.routes);
router.use("/api/inscripciones", RegistrationRoutes.routes);
router.use("/api/cursos", CourseRoutes.routes);



return router;

}





























}