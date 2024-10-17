"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCourserDto = void 0;
class UpdateCourserDto {
    constructor(id, name, teacher, description) {
        this.id = id;
        this.name = name;
        this.teacher = teacher;
        this.description = description;
    }
    get values() {
        const returnObj = {};
        if (this.name)
            returnObj.name = this.name;
        if (this.teacher)
            returnObj.teacher = this.teacher;
        if (this.description)
            returnObj.description = this.description;
        return returnObj;
    }
    static update(props) {
        const { id, name, description, teacher } = props;
        if (!id || isNaN(Number(id)))
            return ["id must be a valid number"];
        return [undefined, new UpdateCourserDto(id, name, teacher, description)];
    }
}
exports.UpdateCourserDto = UpdateCourserDto;
