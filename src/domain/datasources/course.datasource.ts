import { CreateCourserDto, UpdateCourserDto } from "../dtos";
import { Courses } from "../entity/course.entity";

export abstract class CourseDatasource {
  abstract create(createTodoDto: CreateCourserDto): Promise<Courses>;

  //todo paginacion
  abstract getAll(): Promise<Courses[]>;

  abstract findById(id: number): Promise<Courses>;
  abstract updateById(updateStudentDto: UpdateCourserDto): Promise<Courses>;

  abstract deleteById(id: number): Promise<Courses>;
}
