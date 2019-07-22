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

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    if(!this.students) {
      this.fetchStudentFromServer().subscribe(students => this.students = students);
    }
    return of(this.students);
  }

  fetchStudentFromServer(): Observable<Student[]> {
    return this.http.get<Student[]>(dataUrl.students);
  }

}
