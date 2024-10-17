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
exports.CourseController = void 0;
const postgres_1 = require("../../data/postgres");
const dtos_1 = require("../../domain/dtos");
class CourseController {
    constructor() {
        this.allCourse = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const allStudent = yield postgres_1.prima.course.findMany({
                where: { delet: false },
            });
            res.json(allStudent);
        });
        this.getCourse = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id))
                res.status(400).json({ error: "Id argument is not number " });
            const course = yield postgres_1.prima.course.findFirst({
                where: { id: id, delet: false },
            });
            course
                ? res.json(course)
                : res.status(404).json({ error: "Error el curso no existe" });
        });
        this.createCourse = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const [erro, createCourseDto] = dtos_1.CreateCourserDto.create(req.body);
            if (erro)
                res.status(400).json({ erro });
            const teache = yield postgres_1.prima.teacher.findFirst({
                where: { id: createCourseDto.teacher, delet: false },
            });
            if (teache) {
                const oldstudent = yield postgres_1.prima.course.findMany({
                    where: {
                        name: createCourseDto === null || createCourseDto === void 0 ? void 0 : createCourseDto.name,
                        teacherId: createCourseDto === null || createCourseDto === void 0 ? void 0 : createCourseDto.teacher,
                        delet: false,
                    },
                });
                if (oldstudent) {
                    res.status(404).json({ error: "el curso ya existe" });
                }
                const newStudent = yield postgres_1.prima.course.create({
                    data: {
                        name: createCourseDto.name,
                        teacherId: createCourseDto.teacher,
                        description: createCourseDto.description,
                        delet: false,
                    },
                });
                res.status(200).json(newStudent);
            }
            else {
                res.status(404).json({ error: "no existe el profesor " });
            }
            ;
        });
        this.updateCourse = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const [error, updateCourserDto] = dtos_1.UpdateCourserDto.update(Object.assign(Object.assign({}, req.body), { id }));
            if (error)
                res.status(400).json({ error });
            //verificar si existe el profesor
            const teache = yield postgres_1.prima.teacher.findFirst({
                where: { id: updateCourserDto.teacher, delet: false },
            });
            if (teache) {
                const course = yield postgres_1.prima.course.update({
                    where: { id: id, delet: false },
                    data: updateCourserDto.values,
                });
                if (course) {
                    res.json(course);
                }
                else {
                    res.status(404).json({ error: "Error el curso no existe" });
                }
            }
            else {
                res.status(404).json({ error: "no existe el profesor " });
            }
        });
        this.deleteCourse = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const { delet } = req.body;
            if (isNaN(id))
                res.status(400).json({ error: "Id argument is not number " });
            let course = postgres_1.prima.course.update({
                where: { id: id, delet: false },
                data: { delet: true },
            });
            if (course) {
                res.json(course);
            }
            else {
                res.status(404).json({ error: "Error el curso no existe" });
            }
        });
    }
}
exports.CourseController = CourseController;
