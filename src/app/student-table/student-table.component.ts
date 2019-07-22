import {Component, OnInit} from '@angular/core';
import {StudentService} from "../services/student.service";
import {Student} from "../entities/student";
import {MarksService} from "../services/marks.service";
import {Mark} from "../entities/mark";
import {CoursesService} from "../services/courses.service";

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {

  constructor(private studentService: StudentService, private marksService: MarksService, private coursesService: CoursesService) {
  }

  ngOnInit() {
  }

  getStudents(): Student[]{
    return this.studentService.getStudents();
  }

  getAverageMarks(id: string): number{
    return this.marksService.getAverageMarksofStudent(id);
  }

  getNumberOfCourses(id: string): number{
    return this.coursesService.getCoursesOfStudent(id).length;
  }
}
