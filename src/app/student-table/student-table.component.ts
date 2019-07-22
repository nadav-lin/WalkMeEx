import {Component, OnInit} from '@angular/core';
import {StudentService} from "../services/student.service";
import {Student} from "../entities/student";

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {

  edit = false;

  constructor(private studentService: StudentService) {
  }

  ngOnInit() {
  }

  getStudents(): Student[]{
    return this.studentService.getStudents();
  }
}
