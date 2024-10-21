import { Courses } from "./course.entity";
import { StudentEntity } from "./student.entity";

export class Registration {
  public id: number;
  public student: StudentEntity;
  public course: Courses;

  constructor(id: number, student: StudentEntity, course: Courses) {
    this.id = id;
    this.student = student;
    this.course = course;
  }

  public static fromObject(object: { [key: string]: any }) {
    if (!object) {
      throw new Error("Object is required");
    }
    const { id, student, course} = object;
    if (!id) throw "Id is required";
    if (!student) throw "student is required";
    if (!course) throw "course is required";
    // if (!delet) throw "Delete is required";

    return new Registration(id, student, course);
  }
}