"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRegistrationDto = void 0;
class CreateRegistrationDto {
    constructor(student, course) {
        this.student = student;
        this.course = course;
    }
    static create(props) {
        const { student, course } = props;
        if (!student || isNaN(Number(student)))
            return ["studentId must be a valid number"];
        if (!course || isNaN(Number(course)))
            return ["courseId must be a valid number"];
        return [undefined, new CreateRegistrationDto(student, course)];
    }
}
exports.CreateRegistrationDto = CreateRegistrationDto;
