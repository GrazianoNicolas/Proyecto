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
exports.TeacherDatasourceImpl = void 0;
const domain_1 = require("../../domain");
const postgres_1 = require("../../data/postgres");
class TeacherDatasourceImpl {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const allStudent = yield postgres_1.prima.teacher.findMany({
                where: { delet: false },
            });
            return allStudent.map((student) => domain_1.TeacherEntity.fromObject(student));
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const teacher = yield postgres_1.prima.teacher.findFirst({
                where: { id: id },
            });
            if (!teacher) {
                throw new Error("no se encontro el estudiante ");
            }
            return domain_1.TeacherEntity.fromObject(teacher);
        });
    }
    create(createStudentDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const newStudent = yield postgres_1.prima.teacher.create({
                data: { email: createStudentDto.email, name: createStudentDto.name },
            });
            return domain_1.TeacherEntity.fromObject(newStudent);
        });
    }
    updateById(updateTeacherDpo) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(updateTeacherDpo.id);
            const updatedteacher = yield postgres_1.prima.teacher.update({
                where: { id: updateTeacherDpo.id, delet: false },
                data: updateTeacherDpo.values,
            });
            return domain_1.TeacherEntity.fromObject(updatedteacher);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(id);
            let teacher = postgres_1.prima.teacher.update({
                where: { id: id, delet: false },
                data: { delet: true },
            });
            return domain_1.TeacherEntity.fromObject(teacher);
        });
    }
}
exports.TeacherDatasourceImpl = TeacherDatasourceImpl;
