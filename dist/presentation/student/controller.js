"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class StudentController {
    constructor() {
        this.allStudents = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const allStudent = yield postgres_1.prima.student.findMany({
                where: { delet: false },
            });
            res.json(allStudent);
        });
        // ------------------**************************************************-------
        this.getStudent = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id))
                res.status(400).json({ error: "Id argument is not number " });
            const student = yield postgres_1.prima.student.findFirst({
                where: { id: id, delet: false },
            });
            student
                ? res.json(student)
                : res.status(404).json({ error: "Error El estudiante no existe" });
        });
        // ------------------**************************************************-------
        this.createStudent = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const [error, createStudentDto] = dtos_1.CreateStudentDto.create(req.body);
                if (error)
                    res.status(400).json({ error });
                const oldstudent = yield postgres_1.prima.student.findMany({
                    where: { email: createStudentDto.email },
                });
                if (oldstudent) {
                    res.status(409).json({ error: "estudiante existente" });
                }
                const newStudent = yield postgres_1.prima.student.create({
                    data: { email: createStudentDto.email, name: createStudentDto.name },
                });
                res.status(200).json(newStudent);
            }
            catch (err) {
                res.status(500).json({ error: "Internal server error" });
            }
        });
        // ------------------**************************************************-------
        this.updateStudent = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateStudentDto] = dtos_1.UpdateStudentDto.create(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                res.status(400).json({ error });
            const student = yield postgres_1.prima.student.update({
                where: { id: id, delet: false },
                data: updateStudentDto.values,
            });
            if (student) {
                res.json(student);
            }
            else {
                res.status(404).json({ error: "Error El estudiante no existe" });
            }
        });
        // ------------------**************************************************-------
        this.deleteStudent = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const { delet } = req.body;
            if (isNaN(id))
                res.status(400).json({ error: "Id argument is not number " });
            let student = postgres_1.prima.student.update({
                where: { id: id, delet: false },
                data: { delet: true },
            });
            if (student) {
                res.json(student);
            }
            else {
                res.status(404).json({ error: "Error El estudiante no existe" });
            }
        });
    }
}
exports.StudentController = StudentController;
