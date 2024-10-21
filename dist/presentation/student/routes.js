"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const student_datasource_imple_1 = require("../../infrastructure/datasource/student.datasource.imple");
const student_repository_impl_1 = require("../../infrastructure/repository/student.repository.impl");
class StudentRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const datasource = new student_datasource_imple_1.StudentDatasourceImpl();
        const studentRepository = new student_repository_impl_1.StudentRepositoryImpl(datasource);
        const studentController = new controller_1.StudentController(studentRepository);
        router.get("/", studentController.allStudents);
        router.get("/:id", studentController.getStudent);
        router.post("/", studentController.createStudent);
        router.put("/:id", studentController.updateStudent);
        router.delete("/:id", studentController.deleteStudent);
        return router;
    }
}
exports.StudentRoutes = StudentRoutes;
