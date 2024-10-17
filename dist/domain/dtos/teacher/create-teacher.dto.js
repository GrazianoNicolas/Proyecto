"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTeacherDto = void 0;
class CreateTeacherDto {
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
        return [undefined, new CreateTeacherDto(name, email)];
    }
}
exports.CreateTeacherDto = CreateTeacherDto;
