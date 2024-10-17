"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCourserDto = void 0;
class CreateCourserDto {
    constructor(name, teacher, description) {
        this.name = name;
        this.teacher = teacher;
        this.description = description;
    }
    static create(props) {
        const { name, description, teacher } = props;
        if (!name)
            return ["name property is required", undefined];
        if (!teacher || isNaN(Number(teacher)))
            return ["teacherid must be a valid number"];
        return [undefined, new CreateCourserDto(name, teacher, description)];
    }
}
exports.CreateCourserDto = CreateCourserDto;
