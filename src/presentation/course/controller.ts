import {Request, Response} from 'express';
import { prima } from "../../data/postgres";
import { CreateCourserDto, UpdateCourserDto } from '../../domain/dtos';


export class CourseController {
  constructor() {}

  public allCourse = async (req: Request, res: Response) => {
    const allStudent = await prima.course.findMany({
      where: { delet: false },
    });
    res.json(allStudent);
  };





  public getCourse = async (req: Request, res: Response) => {
    const id = +req.params.id;
    if (isNaN(id))
      res.status(400).json({ error: "Id argument is not number " });

    const course = await prima.course.findFirst({
      where: { id: id, delet:false },
    });

    course
      ? res.json(course)
      : res.status(404).json({ error: "Error el curso no existe" });
  };





  public createCourse = async (req: Request, res: Response) => {
    const [erro, createCourseDto] = CreateCourserDto.create(req.body);
    if (erro) res.status(400).json({ erro });
  


      const teache = await prima.teacher.findFirst({
        where: { id: createCourseDto!.teacher, delet: false },
      });

if (teache){
const oldstudent = await prima.course.findMany({
  where: {
    name: createCourseDto?.name,
    teacherId: createCourseDto?.teacher,
    delet: false,
  },
});

if (oldstudent) {
  res.status(404).json({ error: "el curso ya existe" });
}

const newStudent = await prima.course.create({
  data: {
    name: createCourseDto!.name,
    teacherId: createCourseDto!.teacher,
    description: createCourseDto!.description,
    delet: false,
  },
});

res.status(200).json(newStudent);
}else{ 
  res.status(404).json({ error: "no existe el profesor " });
};
 

  };

  public updateCourse = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateCourserDto] = UpdateCourserDto.update({...req.body, id });
      if (error)  res.status(400).json({ error });

   
    //verificar si existe el profesor
    const teache = await prima.teacher.findFirst({
      where: { id: updateCourserDto!.teacher, delet: false },
    });
    if (teache) {

      const course = await prima.course.update({
        where: { id: id, delet: false },
        data: updateCourserDto!.values,
      });

      if (course) {
        res.json(course);
      } else {
        res.status(404).json({ error: "Error el curso no existe" });
      }
    } else {
      res.status(404).json({ error: "no existe el profesor " });
    }
  };

  public deleteCourse = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const { delet } = req.body;

    if (isNaN(id))
      res.status(400).json({ error: "Id argument is not number " });

    let course = prima.course.update({
      where: { id: id, delet: false },
      data: { delet: true },
    });

    if (course) {
      res.json(course);
    } else {
      res.status(404).json({ error: "Error el curso no existe" });
    }
  };
}