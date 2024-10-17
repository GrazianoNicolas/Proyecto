"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentEntity = void 0;
const person_entity_1 = require("./person.entity");
class StudentEntity extends person_entity_1.Person {
    constructor(id, name, email, delet) {
        super(id, name, email, delet);
    }
}
exports.StudentEntity = StudentEntity;
