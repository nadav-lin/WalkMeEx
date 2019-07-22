import {Mark} from "./mark";

export class Student {
  constructor(public ID: string, public firstName: string, public lastName: string, public marks: Mark[]) {}
}
