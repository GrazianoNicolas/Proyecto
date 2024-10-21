import { CourseRepository, Courses, CreateCourserDto, UpdateCourserDto } from "../../domain";


export class CourseRepositoryImpl implements CourseRepository {
  constructor(private readonly datasource: CourseRepository) {}
    create(createCourserDto: CreateCourserDto): Promise<Courses> {
    return this.datasource.create(createCourserDto);
    }
    getAll(): Promise<Courses[]> {
    return this.datasource.getAll();
    }
    findById(id: number): Promise<Courses> {
    return this.datasource.findById(id);
    }
    updateById(updateCourseDto: UpdateCourserDto): Promise<Courses> {
    return this.datasource.updateById(updateCourseDto);
    }
    deleteById(id: number): Promise<Courses> {
    return this.datasource.deleteById(id);
    }
}
