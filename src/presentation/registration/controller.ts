import {Request, Response} from 'express';
import { prima } from "../../data/postgres";
import { CreateRegistrationDto, UpdateRegistrationDto } from '../../domain/dtos';


// !GET /cursos/:id/estudiantes: Listar los estudiantes inscritos en un curso específico por su id.

// !POST /inscripciones: Inscribir a un estudiante en un curso.


// ! No debe permitir inscribir al mismo estudiante más de una vez en el mismo curso..


export class RegistrationController {
  constructor() {}

  public allRegistration = async (req: Request, res: Response) => {
    const allStudent = await prima.registration.findMany({
      where: { delet: false },
    });
    res.json(allStudent);
  };

  public getRegistration = async (req: Request, res: Response) => {
    const id = +req.params.id;
    if (isNaN(id))
      res.status(400).json({ error: "Id argument is not number " });

    const registration = await prima.registration.findFirst({
      where: { id: id, delet:false },
    });

    registration
      ? res.json(registration)
      : res.status(404).json({ error: "Error El estudiante no existe" });
  };

  public createRegistration = async (req: Request, res: Response) => {
    const [error, createRegistrationDto] = CreateRegistrationDto.create( req.body );
    if (error) res.status(400).json({ error });

    //PREGUNTAR si existe el estudiante y el curso

    const course = await prima.course.findFirst({
      where: { id: createRegistrationDto!.course, delet: false },
    });

    const student = await prima.student.findFirst({
      where: { id: createRegistrationDto!.student, delet: false },
    });

    if (student && course) {

      const registration = await prima.registration.findFirst({
        where: { studentId: student.id, courseId: course.id, delet: false },
      });

      if (!registration) {

          const newregistration = await prima.registration.create({
            data: { studentId: student.id, courseId: course.id, delet: false },
          });
          
          res.json(newregistration);

      } else {
          res.status(409).json({ error: " ya existe una inscripcion" });
      }
    } else {
      res.status(404).json({ error: " el estudiante o el curso  no existe" });
    }
  };

  public updateRegistration = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateRegistrationDto] = UpdateRegistrationDto.create({
      ...req.body,
      id,
    });
    if (error) res.status(400).json({ error });

    //todo PREGUNTAR si existe el estudiante y el curso
    const course = await prima.course.findFirst({
      where: { id: updateRegistrationDto!.course, delet: false },
    });

    const student = await prima.student.findFirst({
      where: { id: updateRegistrationDto!.student, delet: false },
    });

    if (student && course) {
      
      //todo ME fijo si esta inscripto en una materia existente para que no se halla duplicados
      const olRregistrations = await prima.registration.findFirst({
        where: { studentId: student.id, courseId: course.id, delet: false },
      });

      if (!olRregistrations) {
        const updateregistration = await prima.registration.update({
          where: { id: id, delet: false },
          data: { studentId: student.id, courseId: course.id },
        });

        if (updateregistration){
          res.json(updateregistration);
        }else{
          res.status(404).json({ error: " no se encontro la inscripcion " });
        } 
      } else {
        res
          .status(404)
          .json({
            error:
              "ya tiene una inscripcion en ese curso, no puede haber dupliacdos",
          });
      }
    } else {
      res.status(404).json({ error: " el estudiante o el curso  no existe" });
    }
  };

  public deleteRegistration = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const { delet } = req.body;

    if (isNaN(id))
      res.status(400).json({ error: "Id argument is not number " });

    let registration = await prima.registration.update({
      where: { id: id, delet: false },
      data: { delet: true },
    });

    if (!registration) {
      res.json(registration);
    } else {
      res.status(404).json({ error: "Error el registro no existe" });
    }
  };
}