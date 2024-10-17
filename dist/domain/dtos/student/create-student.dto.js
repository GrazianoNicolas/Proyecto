"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStudentDto = void 0;
class CreateStudentDto {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    static create(props) {
        const { name, email } = props;
        if (!name)
            return ["name property is required", undefined];
        if (!email)
            return ["email property is required", undefined];
        return [undefined, new CreateStudentDto(name, email)];
    }
}
exports.CreateStudentDto = CreateStudentDto;
