"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherEntity = void 0;
const person_entity_1 = require("./person.entity");
class TeacherEntity extends person_entity_1.Person {
    constructor(id, name, email, delet) {
        super(id, name, email, delet);
    }
}
exports.TeacherEntity = TeacherEntity;
