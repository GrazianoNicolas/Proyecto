import { UpdateCourserDto, CreateCourserDto } from "../dtos";
import { Courses } from "../entity/course.entity";

export abstract class CourseRepository {
  abstract create(createCourserDto: CreateCourserDto): Promise<Courses>;

  //todo paginacion
  abstract getAll(): Promise<Courses[]>;

  abstract findById(id: number): Promise<Courses>;
  abstract updateById(updateCourseDto: UpdateCourserDto): Promise<Courses>;

  abstract deleteById(id: number): Promise<Courses>;
}
