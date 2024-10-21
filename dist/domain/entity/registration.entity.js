"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registration = void 0;
class Registration {
    constructor(id, student, course) {
        this.id = id;
        this.student = student;
        this.course = course;
    }
    static fromObject(object) {
        if (!object) {
            throw new Error("Object is required");
        }
        const { id, student, course } = object;
        if (!id)
            throw "Id is required";
        if (!student)
            throw "student is required";
        if (!course)
            throw "course is required";
        // if (!delet) throw "Delete is required";
        return new Registration(id, student, course);
    }
}
exports.Registration = Registration;
