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
exports.StudentDatasourceImpl = void 0;
const domain_1 = require("../../domain");
const postgres_1 = require("../../data/postgres");
class StudentDatasourceImpl {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const allStudent = yield postgres_1.prima.student.findMany({
                where: { delet: false },
            });
            return allStudent.map((student) => domain_1.StudentEntity.fromObject(student));
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const studentbyid = yield postgres_1.prima.student.findFirst({
                where: { id: id, delet: false },
            });
            if (!studentbyid) {
                throw new Error("no se encontro el estudiante ");
            }
            return domain_1.StudentEntity.fromObject(studentbyid);
        });
    }
    create(createStudentDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const newStudent = yield postgres_1.prima.student.create({
                data: { name: createStudentDto.name, email: createStudentDto.email },
            });
            return domain_1.StudentEntity.fromObject(newStudent);
        });
    }
    updateById(updateStudentDto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(updateStudentDto.id);
            const updatedSudent = yield postgres_1.prima.student.update({
                where: { id: updateStudentDto.id, delet: false },
                data: updateStudentDto.values,
            });
            return domain_1.StudentEntity.fromObject(updatedSudent);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(id);
            let deletStudent = yield postgres_1.prima.student.update({
                where: { id: id, delet: false },
                data: { delet: true },
            });
            return domain_1.StudentEntity.fromObject(deletStudent);
        });
    }
}
exports.StudentDatasourceImpl = StudentDatasourceImpl;
