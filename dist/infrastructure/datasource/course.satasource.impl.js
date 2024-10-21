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
exports.CourseDatasourceImpl = void 0;
const domain_1 = require("../../domain");
const postgres_1 = require("../../data/postgres");
class CourseDatasourceImpl {
    create(createCourseDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const newCourse = yield postgres_1.prima.course.create({
                data: {
                    name: createCourseDto.name,
                    teacherId: createCourseDto.teacher,
                    description: createCourseDto.description,
                    delet: false,
                },
            });
            return domain_1.Courses.fromObject(newCourse);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const allCourse = yield postgres_1.prima.course.findMany({
                where: { delet: false },
            });
            return allCourse.map((course) => domain_1.Courses.fromObject(course));
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const course = yield postgres_1.prima.course.findFirst({
                where: { id: id, delet: false },
            });
            if (!course) {
                throw new Error("no se encontro el curso ");
            }
            return domain_1.Courses.fromObject(course);
        });
    }
    updateById(updateCourserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(updateCourserDto.id);
            const course = yield postgres_1.prima.course.update({
                where: { id: updateCourserDto.id, delet: false },
                data: {
                    teacherId: updateCourserDto.teacher,
                    name: updateCourserDto.name,
                    description: updateCourserDto === null || updateCourserDto === void 0 ? void 0 : updateCourserDto.description,
                },
            });
            return domain_1.Courses.fromObject(course);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(id);
            let course = yield postgres_1.prima.course.update({
                where: { id: id, delet: false },
                data: { delet: true },
            });
            return domain_1.Courses.fromObject(course);
        });
    }
}
exports.CourseDatasourceImpl = CourseDatasourceImpl;
