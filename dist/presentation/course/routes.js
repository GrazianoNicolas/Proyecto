"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class CourseRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const courseController = new controller_1.CourseController();
        router.get("/", courseController.allCourse);
        router.get("/:id", courseController.getCourse);
        router.post("/", courseController.createCourse);
        router.put("/:id", courseController.updateCourse);
        router.delete("/:id", courseController.deleteCourse);
        return router;
    }
}
exports.CourseRoutes = CourseRoutes;
