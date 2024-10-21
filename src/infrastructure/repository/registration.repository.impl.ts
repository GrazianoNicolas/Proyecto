import { CreateRegistrationDto, Registration, RegistrationRepository, UpdateRegistrationDto } from "../../domain";


export class RegistrationRepositoryImpl implements RegistrationRepository {
  constructor(private readonly datasource: RegistrationRepository) {}
  
    create(createTodoDto: CreateRegistrationDto): Promise<Registration> {
    return this.datasource.create(createTodoDto);
    }
    getAll(): Promise<Registration[]> {
    return this.datasource.getAll();
    }
    findById(id: number): Promise<Registration> {
    return this.datasource.findById(id);
    }
    updateById(updateStudentDto: UpdateRegistrationDto): Promise<Registration> {
    return this.datasource.updateById(updateStudentDto);
    }
    deleteById(id: number): Promise<Registration> {
    return this.datasource.deleteById(id);
    }
}
