"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const routes_1 = require("./teacher/routes");
const routes_2 = require("./registration/routes");
const routes_3 = require("./course/routes");
const routes_4 = require("./student/routes");
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        router.use("/api/estudiantes", routes_4.StudentRoutes.routes);
        router.use("/api/profesores", routes_1.TeacheRoutes.routes);
        router.use("/api/inscripciones", routes_2.RegistrationRoutes.routes);
        router.use("/api/cursos", routes_3.CourseRoutes.routes);
        return router;
    }
}
exports.AppRoutes = AppRoutes;
