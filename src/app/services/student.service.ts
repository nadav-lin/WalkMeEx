import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs/index";
import {Student} from "../entities/student";

import {dataUrl} from "../dataUrls";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[];

  constructor(private http: HttpClient) {
    this.initStudents()
  }

  getStudents(): Student[]{
    return this.students;
  }

  fetchStudentFromServer(): Observable<Student[]> {
    return this.http.get<Student[]>(dataUrl.students);
  }

  initStudents(): void {
    this.fetchStudentFromServer().subscribe(students => this.students = students);
  }
}
