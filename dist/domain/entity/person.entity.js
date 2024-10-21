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
        if (!object) {
            throw new Error("Object is required");
        }
        const { id, name, email, delet } = object;
        if (!id)
            throw "Id is required";
        if (!name)
            throw "Name is required";
        if (!email)
            throw "Email is required";
        if (!delet)
            throw "Delete is required";
        return new Person(id, name, email, delet);
    }
}
exports.Person = Person;
