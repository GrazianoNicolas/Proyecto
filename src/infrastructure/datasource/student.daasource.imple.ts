import {
  CreateStudentDto,
  StudentDatasource,
  StudentEntity,
  UpdateStudentDto,
} from "../../domain";
import { prima } from "../../data/postgres";



export class StudentDatasourceImpl implements StudentDatasource {
  async getAll(): Promise<StudentEntity[]> {
    const allStudent = await prima.student.findMany({
      where: { delet: false },
    });

    return allStudent.map((student) => StudentEntity.fromObject(student));
  }


  async findById(id: number): Promise<StudentEntity> {
    const studentbyid = await prima.student.findFirst({
      where: { id: id, delet: false },
    });

    return StudentEntity.fromObject(studentbyid);
  }


  async create(createTodoDto: CreateStudentDto): Promise<StudentEntity> {
    throw new Error("Method not implemented.");
  }

  async updateById(updateStudentDto: UpdateStudentDto): Promise<StudentEntity> {
    throw new Error("Method not implemented.");
  }

  async deleteById(id: number): Promise<StudentEntity> {
    throw new Error("Method not implemented.");
  }
}