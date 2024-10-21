import { CreateRegistrationDto, UpdateRegistrationDto } from "../dtos";
import { Registration } from "../entity/registration.entity";

export abstract class RegistrationRepository {
  abstract create(createTodoDto: CreateRegistrationDto): Promise<Registration>;

  //todo paginacion
  abstract getAll(): Promise<Registration[]>;

  abstract findById(id: number): Promise<Registration>;
  abstract updateById(
    updateStudentDto: UpdateRegistrationDto
  ): Promise<Registration>;

  abstract deleteById(id: number): Promise<Registration>;
}
