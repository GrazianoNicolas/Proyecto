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
}
