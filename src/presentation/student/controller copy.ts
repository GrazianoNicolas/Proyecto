import {Request, Response} from 'express';
import { prima } from '../../data/postgres';
import { CreateStudentDto, UpdateStudentDto } from '../../domain/dtos';



export class StudentController {
  constructor() {}

  public allStudents = async (req: Request, res: Response) => {
    const allStudent = await prima.student.findMany({
      where: { delet: false },
    });
    res.json(allStudent);
  };

  // ------------------**************************************************-------

  public getStudent = async (req: Request, res: Response) => {
    const id = +req.params.id;
    if (isNaN(id))
      res.status(400).json({ error: "Id argument is not number " });

    
      const student = await prima.student.findFirst({
        where: { id: id, delet: false },
      });


    student
      ? res.json(student)
      : res.status(404).json({ error: "Error El estudiante no existe" });
  };

  // ------------------**************************************************-------

  public createStudent = async (req: Request, res: Response) => {
    try {
      const [error, createStudentDto] = CreateStudentDto.create(req.body);

      if (error)  res.status(400).json({ error });

      const oldstudent = await prima.student.findFirst({
        where: { email: createStudentDto!.email },
      });
        console.log(oldstudent);

      if (oldstudent) {
        res.status(409).json({ error: "ya existe un estudiante con ese email" });
      }else{
        const newStudent = await prima.student.create({
          data: {name:createStudentDto!.name, email:createStudentDto!.email}
        });

        res.status(200).json(newStudent);
      }
    } catch (err) {
       res.status(500).json({ error: "Internal server error" });
    }
  };

  // ------------------**************************************************-------

  public updateStudent = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateStudentDto] = UpdateStudentDto.create({ ...req.body,id });
    if (error)  res.status(400).json({ error });

    const student = await prima.student.update({
      where: { id: id, delet: false },
      data: updateStudentDto!.values,
    });

    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ error: "Error El estudiante no existe" });
    }
  };

  // ------------------**************************************************-------

  public deleteStudent = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const { delet } = req.body;

    if (isNaN(id))
      res.status(400).json({ error: "Id argument is not number " });

    let student = await prima.student.update({
      where: { id: id, delet: false },
      data: { delet: true },
    });
console.log(student);
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ error: "Error El estudiante no existe" });
    }
  };
}