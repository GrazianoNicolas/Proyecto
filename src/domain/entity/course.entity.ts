import { TeacherEntity } from "./teacher.entity";

export class Courses {
  public id: number;
  public teacher: TeacherEntity;
  public name: string;
  public description?: string;

  constructor(
    id: number,
    teacher: TeacherEntity,
    name: string,
    description: string
  ) {
    this.id = id;
    this.teacher = teacher;
    this.name = name;
    this.description = description;
  }

  public static fromObject(object: { [key: string]: any }) {
    if (!object) {
      throw new Error("Object is required");
    }
    const { id, teacher, name, description } = object;
    if (!id) throw "Id is required";
    if (!name) throw "Name is required";
    if (!teacher) throw "teacher is required";
    if (!description) throw "description is required";

    return new Courses(id, teacher, name, description);
  }
}
