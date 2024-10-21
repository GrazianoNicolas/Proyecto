"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherRepositoryImpl = void 0;
class TeacherRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    create(createTodoDto) {
        return this.datasource.create(createTodoDto);
    }
    getAll() {
        return this.datasource.getAll();
    }
    findById(id) {
        return this.datasource.findById(id);
    }
    updateById(updateStudentDto) {
        return this.datasource.updateById(updateStudentDto);
    }
    deleteById(id) {
        return this.datasource.deleteById(id);
    }
}
exports.TeacherRepositoryImpl = TeacherRepositoryImpl;
;
