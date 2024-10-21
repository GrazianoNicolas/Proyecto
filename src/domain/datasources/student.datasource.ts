import { CreateStudentDto, UpdateStudentDto } from "../dtos";
import { Person } from "../entity/person.entity";
import { StudentEntity } from "../entity/student.entity";



export abstract class StudentDatasource {
  abstract create(createTodoDto: CreateStudentDto): Promise<StudentEntity>;

  //todo paginacion
  abstract getAll(): Promise<StudentEntity[]>;

  abstract findById(id: number): Promise<StudentEntity>;
  abstract updateById(
    updateStudentDto: UpdateStudentDto
  ): Promise<StudentEntity>;

  abstract deleteById(id: number): Promise<StudentEntity>;
}