"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class StudentRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const studentController = new controller_1.StudentController();
        router.get("/", studentController.allStudents);
        router.get("/:id", studentController.getStudent);
        router.post("/", studentController.createStudent);
        router.put("/:id", studentController.updateStudent);
        router.delete("/:id", studentController.deleteStudent);
        return router;
    }
}
exports.StudentRoutes = StudentRoutes;
