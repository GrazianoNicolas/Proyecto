import { CreateTeacherDto,UpdateTeacherDto } from "../dtos";
import { TeacherEntity } from "../entity/teacher.entity";

export abstract class TeacherRepository {
  abstract create(createTodoDto: CreateTeacherDto): Promise<TeacherEntity>;

  //todo paginacion
  abstract getAll(): Promise<TeacherEntity[]>;

  abstract findById(id: number): Promise<TeacherEntity>;
  abstract updateById(
    updateStudentDto: UpdateTeacherDto
  ): Promise<TeacherEntity>;

  abstract deleteById(id: number): Promise<TeacherEntity>;
}
