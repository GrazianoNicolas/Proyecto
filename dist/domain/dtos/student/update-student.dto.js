"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStudentDto = void 0;
class UpdateStudentDto {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    get values() {
        const returnObj = {};
        if (this.name)
            returnObj.name = this.name;
        if (this.email)
            returnObj.email = this.email;
        return returnObj;
    }
    static create(props) {
        const { id, name, email } = props;
        if (!id || isNaN(Number(id)))
            return ["id must be a valid number"];
        return [undefined, new UpdateStudentDto(id, name, email)];
    }
}
exports.UpdateStudentDto = UpdateStudentDto;
