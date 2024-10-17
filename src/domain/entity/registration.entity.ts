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
}