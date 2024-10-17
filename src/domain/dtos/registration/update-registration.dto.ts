export class UpdateRegistrationDto {
  private constructor(
    public readonly id: number,
    public readonly student: number,
    public readonly course: number
  ) {}
  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.student) returnObj.student = this.student;
    if (this.course) returnObj.course = this.course;
    return returnObj;
  }
  static create(props: {
    [key: string]: any;
  }): [string?, UpdateRegistrationDto?] {
    const { id, student, course } = props;
    if (!student || isNaN(Number(student)))
      return ["studentId must be a valid number"];

    if (!id || isNaN(Number(id))) return ["id must be a valid number"];

    if (!course || isNaN(Number(course)))
      return ["courseId must be a valid number"];

    return [undefined, new UpdateRegistrationDto(id, student, course)];
  }
}