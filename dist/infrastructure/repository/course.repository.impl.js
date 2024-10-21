"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseRepositoryImpl = void 0;
class CourseRepositoryImpl {
    constructor(datasource) {
        this.datasource = datasource;
    }
    create(createCourserDto) {
        return this.datasource.create(createCourserDto);
    }
    getAll() {
        return this.datasource.getAll();
    }
    findById(id) {
        return this.datasource.findById(id);
    }
    updateById(updateCourseDto) {
        return this.datasource.updateById(updateCourseDto);
    }
    deleteById(id) {
        return this.datasource.deleteById(id);
    }
}
exports.CourseRepositoryImpl = CourseRepositoryImpl;
