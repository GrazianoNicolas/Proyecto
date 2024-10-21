import {
  TeacherRepository,
  TeacherEntity,
  CreateTeacherDto,
  UpdateTeacherDto,
  TeacherDatasource,
} from "../../domain";
import { prima } from "../../data/postgres";

export class StudentDatasourceImpl implements TeacherDatasource {
  async getAll(): Promise<TeacherEntity[]> {
    const allStudent = await prima.teacher.findMany({
      where: { delet: false },
    });

    return allStudent.map((student) => TeacherEntity.fromObject(student));
  }

  async findById(id: number): Promise<TeacherEntity> {
    const teacher = await prima.teacher.findFirst({
      where: { id: id },
    });
    if (!teacher) {
      throw new Error("no se encontro el estudiante ");
    }
    return TeacherEntity.fromObject(teacher);
  }

  async create(createStudentDto: CreateTeacherDto): Promise<TeacherEntity> {
    const newStudent = await prima.teacher.create({
      data: { email: createStudentDto!.email, name: createStudentDto!.name },
    });
    return TeacherEntity.fromObject(newStudent);
  }

  async updateById(updateTeacherDpo: UpdateTeacherDto): Promise<TeacherEntity> {
    await this.findById(updateTeacherDpo.id);

    const updatedteacher = await prima.teacher.update({
      where: { id: updateTeacherDpo.id, delet: false },
      data: updateTeacherDpo!.values,
    });

    return TeacherEntity.fromObject(updatedteacher);
  }

  async deleteById(id: number): Promise<TeacherEntity> {
    await this.findById(id);

    let teacher = prima.teacher.update({
      where: { id: id, delet: false },
      data: { delet: true },
    });

    return TeacherEntity.fromObject(teacher);
  }
}
