import {Student} from "./student";

export class Course {
  constructor(public ID: string, public name: string, public students: Student[]) {}
}
