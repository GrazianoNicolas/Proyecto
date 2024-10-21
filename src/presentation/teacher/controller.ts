import {Request, Response} from 'express';
import { prima } from "../../data/postgres";
import {
  CreateTeacherDto,
  UpdateTeacherDto,
  TeacherRepository,
} from "../../domain";



export class TeacheController {
  constructor(private readonly teacherRepository: TeacherRepository) {}
  public allTeache = async (req: Request, res: Response) => {
    const allStudent = await this.teacherRepository.getAll();
    res.json(allStudent);
  };

  public getTeache = async (req: Request, res: Response) => {
    const id = +req.params.id;
    if (isNaN(id))
      res.status(400).json({ error: "Id argument is not number " });
    try {
      const teacher = await this.teacherRepository.findById(id);
      res.status(201).json(teacher);
    } catch (error) {
      res.status(409).json({ error });
    }
      
  
  };

  public createTeache = async (req: Request, res: Response) => {
     const [error, createTeacherDto] = CreateTeacherDto.create(req.body);
    const { email, name } = req.body;
    if (!name) res.status(400).json("name property is required");

    if (!email) res.status(400).json("email property is required");
    const oldstudent = await prima.teacher.findFirst({
      where: { email: email },
    });

    if (oldstudent) {
      res.status(409).json({ error: "ya hay un profesor con ese email" });
    } else {
      const newStudent = await this.teacherRepository.create(createTeacherDto!);

      res.status(200).json(newStudent);
    }
  };

  public updateTeache = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateTeacherDpo] = UpdateTeacherDto.Update({
      ...req.body,
      id,
    });
    if (error) res.status(400).json({ error });

    let teacher = await this.teacherRepository.updateById(updateTeacherDpo!);

    if (!teacher) {
      res.status(400).json({ error: "Error profesor no existe" });
    } else {
      res.status(200).json({ teacher });
    }
  };

  public deleteTeache = async (req: Request, res: Response) => {
    const id = +req.params.id;

    if (isNaN(id))
      res.status(400).json({ error: "Id argument is not number " });

    let teacher = await this.teacherRepository.deleteById(id);

    if (teacher) {
      res.json(teacher);
    } else {
      res.status(404).json({ error: "Error profesor no existe" });
    }
  };
}