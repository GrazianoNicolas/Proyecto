"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Courses = void 0;
class Courses {
    constructor(id, teacher, name, description) {
        this.id = id;
        this.teacher = teacher;
        this.name = name;
        this.description = description;
    }
    static fromObject(object) {
        if (!object) {
            throw new Error("Object is required");
        }
        const { id, teacher, name, description } = object;
        if (!id)
            throw "Id is required";
        if (!name)
            throw "Name is required";
        if (!teacher)
            throw "teacher is required";
        if (!description)
            throw "description is required";
        return new Courses(id, teacher, name, description);
    }
}
exports.Courses = Courses;
