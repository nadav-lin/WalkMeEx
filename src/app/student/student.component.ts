import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from "../entities/student";
import {MarksService} from "../services/marks.service";
import {CoursesService} from "../services/courses.service";
import {StudentService} from "../services/student.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() student: Student;
  edit = false;
  constructor(private studentService: StudentService, private marksService: MarksService, private coursesService: CoursesService) { }

  ngOnInit() {
    if(!this.student){
      this.edit = true;
    }
  }

  submit(id: string, firstName: string, lastName: string): void {
    let newStudent = new Student(id, firstName ,lastName)
    this.studentService.addOrUpdateStudent(newStudent);
    this.toggleEdit();
  }

  getAverageMarks(id: string): number{
    return this.marksService.getAverageMarksofStudent(id);
  }

  getNumberOfCourses(id: string): number{
    return this.coursesService.getCoursesOfStudent(id).length;
  }

  toggleEdit(): void {
    this.edit = !this.edit;
  }

}
