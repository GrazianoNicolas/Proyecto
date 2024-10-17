import {Request, Response} from 'express';
import { prima } from "../../data/postgres";
import { CreateTeacherDto, UpdateTeacherDto } from '../../domain';



export class TeacheController {
  constructor() {}

  public allTeache = async (req: Request, res: Response) => {
    const allStudent = await prima.teacher.findMany({
      where: { delet: false },
    });
    res.json(allStudent);
  };

  public getTeache = async (req: Request, res: Response) => {
    const id = +req.params.id;
    if (isNaN(id))
      res.status(400).json({ error: "Id argument is not number " });

    const teacher = await prima.teacher.findFirst({
      where: { id: id },
    });

    teacher
      ? res.json(teacher)
      : res.status(404).json({ error: "Error profesor no existe" });
  };

  public createTeache =  (req: Request, res: Response) => {
    const [error, createteacherDpo] = CreateTeacherDto.create(req.body); ;
   if (error) res.status(400).json({error});



    res.status(200).json("email, name ");
  };

  public updateTeache =  (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateTeacherDpo] = UpdateTeacherDto.Update({...req.body,id});
    if (error) res.status(400).json({ error });

    let teacher = prima.teacher.update({
      where: { id: id, delet: false },
      data: updateTeacherDpo!.values,
    });

    if (!teacher) {
      res.status(400).json({ error: "Error profesor no existe" });
    } 
    else {res.status(200).json({ teacher });
    }
  };

  public deleteTeache = async (req: Request, res: Response) => {
    const id = +req.params.id;

    if (isNaN(id))
      res.status(400).json({ error: "Id argument is not number " });

    let teacher = prima.teacher.update({
      where: { id: id, delet: false },
      data: { delet: true },
    });

    if (teacher) {
      res.json(teacher);
    } else {
      res.status(404).json({ error: "Error profesor no existe" });
    }
  };
}