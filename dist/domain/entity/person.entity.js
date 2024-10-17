"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(id, name, email, delet) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.delet = delet;
    }
    static fromObject(object) {
        const { id, name, email, delet } = object;
        return new Person(id, name, email, delet);
    }
}
exports.Person = Person;
