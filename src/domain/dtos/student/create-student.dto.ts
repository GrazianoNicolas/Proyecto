export class CreateStudentDto {
  private constructor(
    public readonly name: string,
    public readonly email: string
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateStudentDto?] {
    const { name, email } = props;
    if (!name) return ["name property is required", undefined];

    if (!email) return ["email property is required", undefined];

    return [undefined, new CreateStudentDto(name, email)];
  }
}