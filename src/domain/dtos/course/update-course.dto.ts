
 export class UpdateCourserDto {
   private constructor(
     public readonly id: number,
     public readonly name?: string,
     public readonly teacher?: number,
     public readonly description?: string
   ) {}

   get values() {
     const returnObj: { [key: string]: any } = {};

     if (this.name) returnObj.name = this.name;
     if (this.teacher) returnObj.teacher = this.teacher;
     if (this.description) returnObj.description = this.description;
     return returnObj;
   }

   static update(props: { [key: string]: any }): [string?, UpdateCourserDto?] {
     const { id, name, description, teacher } = props;

     if (!id || isNaN(Number(id))) return ["id must be a valid number"];

     return [undefined, new UpdateCourserDto(id, name, teacher, description)];
   }
 }