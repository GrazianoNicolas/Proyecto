import {
  TeacherRepository,
  TeacherEntity,
  CreateTeacherDto,
  UpdateTeacherDto,
  TeacherDatasource
} from "../../domain";




export class TeacherRepositoryImpl implements TeacherRepository {
  constructor(private readonly datasource: TeacherDatasource) {}

  create(createTodoDto: CreateTeacherDto): Promise<TeacherEntity> {
    return this.datasource.create(createTodoDto);
  }
  getAll(): Promise<TeacherEntity[]> {
    return this.datasource.getAll();
  }
  findById(id: number): Promise<TeacherEntity> {
    return this.datasource.findById(id);
  }
  updateById(updateStudentDto: UpdateTeacherDto): Promise<TeacherEntity> {
    return this.datasource.updateById(updateStudentDto);
  }
  deleteById(id: number): Promise<TeacherEntity> {
    return this.datasource.deleteById(id);
  }
};