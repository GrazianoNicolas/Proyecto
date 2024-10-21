import { CourseDatasource, Courses, CreateCourserDto, UpdateCourserDto } from "../../domain";
import { prima } from "../../data/postgres";

export class CourseDatasourceImpl implements CourseDatasource {
  async create(createCourseDto: CreateCourserDto): Promise<Courses> {
    const newCourse = await prima.course.create({
      data: {
        name: createCourseDto!.name,
        teacherId: createCourseDto!.teacher,
        description: createCourseDto!.description,
        delet: false,
      },
      include: { fk_teacher: true },
    });
    return Courses.fromObject(newCourse);
  }

  async getAll(): Promise<Courses[]> {
    const allCourse = await prima.course.findMany({
      where: { delet: false },
      include: { fk_teacher: true },
    });

    return allCourse.map((course) => Courses.fromObject(course));
  }
  async findById(id: number): Promise<Courses> {
    const course = await prima.course.findFirst({
      where: { id: id, delet: false },
      include: { fk_teacher: true },
    });

    if (!course) {
      throw new Error("no se encontro el curso ");
    }
    return Courses.fromObject(course);
  }
  async updateById(updateCourserDto: UpdateCourserDto): Promise<Courses> {
    await this.findById(updateCourserDto.id);

    const course = await prima.course.update({
      where: { id: updateCourserDto.id, delet: false },
      data: {
        teacherId: updateCourserDto!.teacher,
        name: updateCourserDto!.name,
        description: updateCourserDto?.description,
      },
      include: { fk_teacher: true },
    });

    return Courses.fromObject(course);
  }
  async deleteById(id: number): Promise<Courses> {
    await this.findById(id);

    let course = await prima.course.update({
      where: { id: id, delet: false },
      data: { delet: true },
      include: { fk_teacher: true },
    });

    return Courses.fromObject(course);
  }
}