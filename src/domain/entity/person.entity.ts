import { StudentEntity } from "./student.entity";

export class Person {
  public id: number;
  public name: string;
  public email: string;
  public delet: boolean;

  constructor(id: number, name: string, email: string, delet: boolean) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.delet = delet;
  }

  public static fromObject(object: { [key: string]: any } ) {
    if (!object) {
      throw new Error("Object is required");
    }
    const { id, name, email, delet } = object;
    if (!id) throw "Id is required";
    if (!name) throw "Name is required";
    if (!email) throw "Email is required";
    if (!delet) throw "Delete is required";

    return new Person(id, name, email, delet);
  }
}
