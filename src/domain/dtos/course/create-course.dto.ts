export class CreateCourserDto {
  private constructor(
    public readonly name: string,
    public readonly teacher: number,
    public readonly description?: string,
  
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateCourserDto?] {
    const { name, description, teacher } = props;
    if (!name) return ["name property is required", undefined];
    if (!teacher || isNaN(Number(teacher)))
      return ["teacherid must be a valid number"];


    return [undefined, new CreateCourserDto(name, teacher, description)];
  }
}