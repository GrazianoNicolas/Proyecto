import {Request, Response} from 'express';
import { prima } from '../../data/postgres';
import { CreateStudentDto, UpdateStudentDto } from '../../domain/dtos';
import { StudentRepository } from '../../domain';



export class StudentController {
  constructor(private readonly studentRepository:StudentRepository) {

  }

  public allStudents = async (req: Request, res: Response) => {
    const allStudent = await this.studentRepository.getAll();
    
    res.json(allStudent);
  };

  // ------------------**************************************************-------

  public getStudent = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try{
      const todo = await this.studentRepository.findById(id);
            res
              .status(201)
              .json(todo);

    }catch(error){
      res.status(409).json({ error });
    }
  };

  // ------------------**************************************************-------

  public createStudent = async (req: Request, res: Response) => {
    try {
      const [error, createStudentDto] = CreateStudentDto.create(req.body);

      if (error)  res.status(400).json({ error });

      const oldstudent = await prima.student.findFirst({
        where: { email: createStudentDto!.email },
      });

      if (oldstudent) {
        res.status(409).json({ error: "ya existe un estudiante con ese email" });
      }else{
        const newStudent = await this.studentRepository.create(createStudentDto!);

        res.status(201).json(newStudent);
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

    const student = await this.studentRepository.updateById(updateStudentDto!);

    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ error: "Error El estudiante no existe" });
    }
  };

  // ------------------**************************************************-------

  public deleteStudent = async (req: Request, res: Response) => {
    const id = +req.params.id;

    if (isNaN(id))
      res.status(400).json({ error: "Id argument is not number " });

    let student = await this.studentRepository.deleteById(id);
    
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ error: "Error El estudiante no existe" });
    }
  };
}