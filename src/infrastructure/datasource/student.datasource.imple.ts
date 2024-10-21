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
    if (!studentbyid) {
      throw new Error("no se encontro el estudiante ");
    }
    console.log(studentbyid);
    return StudentEntity.fromObject(studentbyid);
  }

  async create(createStudentDto: CreateStudentDto): Promise<StudentEntity> {
    const newStudent = await prima.student.create({
      data: { name: createStudentDto!.name, email: createStudentDto!.email },
    });
  return StudentEntity.fromObject(newStudent);
  }

  async updateById(updateStudentDto: UpdateStudentDto): Promise<StudentEntity> {
    await this.findById(updateStudentDto.id);

    const updatedSudent = await prima.student.update({
      where: { id: updateStudentDto.id, delet: false },
      data: updateStudentDto!.values,
    });

    return StudentEntity.fromObject(updatedSudent);
  }

  async deleteById(id: number): Promise<StudentEntity> {
    await this.findById(id);

    let deletStudent = await prima.student.update({
      where: { id: id, delet: false },
      data: { delet: true },
    });

    return StudentEntity.fromObject(deletStudent);
  }
}