export class UpdateTeacherDto {
  private constructor(
    public readonly id: number,
    public readonly name?: string,
    public readonly email?: string
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.name) returnObj.name = this.name;
    if (this.email) returnObj.email = this.email;
    return returnObj;
  }

  static Update(props: { [key: string]: any }): [string?, UpdateTeacherDto?] {
    const { id, name, email } = props;
    if (!id || isNaN(Number(id))) return ["id must be a valid number"];

    return [undefined, new UpdateTeacherDto(id, name, email)];
  }
}