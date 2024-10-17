"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const routes_1 = require("./teacher/routes");
// import { RegistrationRoutes } from "./registration/routes";
// import { CourseRoutes } from "./course/routes";
// import { StudentRoutes } from "./student/routes";
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        // router.use("/api/estudiantes", StudentRoutes.routes);
        router.use("/profesores", routes_1.TeacheRoutes.routes);
        // router.use("/api/inscripciones", RegistrationRoutes.routes);
        // router.use("/api/cursos", CourseRoutes.routes);
        return router;
    }
}
exports.AppRoutes = AppRoutes;
