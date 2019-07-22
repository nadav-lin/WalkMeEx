import { Component, OnInit } from '@angular/core';
import {StudentService} from "../services/student.service";
import {Student} from "../entities/student";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {
  students: Student[];

  constructor(private studentService: StudentService) {
  }

  ngOnInit() {
  }

  getStudents(): Observable<Student[]> {
    return this.studentService.getStudents();
  }
}
