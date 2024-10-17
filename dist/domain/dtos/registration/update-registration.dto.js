"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRegistrationDto = void 0;
class UpdateRegistrationDto {
    constructor(id, student, course) {
        this.id = id;
        this.student = student;
        this.course = course;
    }
    get values() {
        const returnObj = {};
        if (this.student)
            returnObj.student = this.student;
        if (this.course)
            returnObj.course = this.course;
        return returnObj;
    }
    static create(props) {
        const { id, student, course } = props;
        if (!student || isNaN(Number(student)))
            return ["studentId must be a valid number"];
        if (!id || isNaN(Number(id)))
            return ["id must be a valid number"];
        if (!course || isNaN(Number(course)))
            return ["courseId must be a valid number"];
        return [undefined, new UpdateRegistrationDto(id, student, course)];
    }
}
exports.UpdateRegistrationDto = UpdateRegistrationDto;
