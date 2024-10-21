import { CreateStudentDto, UpdateStudentDto } from "../dtos";
import { StudentEntity } from "../entity/student.entity";

export abstract class StudentRepository {
  abstract create(createTodoDto: CreateStudentDto): Promise<StudentEntity>;

  //todo paginacion
  abstract getAll(): Promise<StudentEntity[]>;

  abstract findById(id: number): Promise<StudentEntity>;
  abstract updateById(
    updateStudentDto: UpdateStudentDto
  ): Promise<StudentEntity>;

  abstract deleteById(id: number): Promise<StudentEntity>;
}
