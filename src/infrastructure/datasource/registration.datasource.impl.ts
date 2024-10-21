import { CreateRegistrationDto, Registration, RegistrationDatasource, UpdateRegistrationDto } from "../../domain";
import { prima } from "../../data/postgres";

export class RegistrationDatasourceImpl implements RegistrationDatasource {

  async create(createTodoDto: CreateRegistrationDto): Promise<Registration> {
     const newregistration = await prima.registration.create({
       data: {
         studentId: createTodoDto!.student,
         courseId: createTodoDto!.course,
         delet: false,
       },
     });
    return Registration.fromObject(newregistration);
  }
  async getAll(): Promise<Registration[]> {
    const allregistration = await prima.registration.findMany({
      where: { delet: false },
    });

    return allregistration.map((regis) => Registration.fromObject(regis));
  }

  async findById(id: number): Promise<Registration> {
    const registration = await prima.registration.findFirst({
      where: { id: id, delet: false },
    });
    if (!registration) {
      throw new Error("no se encontro el estudiante ");
    }
    return Registration.fromObject(registration);
  }



  async updateById(
    updateRegistrationtDto: UpdateRegistrationDto
  ): Promise<Registration> {
     await this.findById(updateRegistrationtDto.id);

     const updateregistration = await prima.registration.update({
       where: { id: updateRegistrationtDto.id, delet: false },
       data: {
         studentId: updateRegistrationtDto.student,
         courseId: updateRegistrationtDto.course,
       },
     });

     return Registration.fromObject(updateregistration);
  }




  async deleteById(id: number): Promise<Registration> {
    await this.findById(id);

   let registration = await prima.registration.update({
     where: { id: id, delet: false },
     data: { delet: true },
   });
    return Registration.fromObject(registration);
  }
}