export class CreateRegistrationDto {
  private constructor(
    public readonly student: number,
    public readonly course: number
  ) {}

  static create(props: { [key: string]: any;}): [string?, CreateRegistrationDto?] {
    const { student, course } = props;
    if (!student || isNaN(Number(student)))
      return ["studentId must be a valid number"];

    if (!course || isNaN(Number(course)))
      return ["courseId must be a valid number"];

    return [undefined, new CreateRegistrationDto(student, course)];
  }
}