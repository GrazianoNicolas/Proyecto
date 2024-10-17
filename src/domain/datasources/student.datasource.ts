import { CreateStudentDto, UpdateStudentDto } from "../dtos";
import { Person } from "../entity/person.entity";
import { StudentEntity } from "../entity/student.entity";



export abstract class StudentDatasource {
  abstract create(createTodoDto: CreateStudentDto): Promise<Person>;

  //todo paginacion
  abstract getAll(): Promise<Person[]>;

  abstract findById(id: number): Promise<Person>;
  abstract updateById(
    updateStudentDto: UpdateStudentDto
  ): Promise<StudentEntity>;

  abstract deleteById(id: number): Promise<Person>;
}