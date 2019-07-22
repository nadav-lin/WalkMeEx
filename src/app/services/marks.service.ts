import { Injectable } from '@angular/core';
import {Mark} from "../entities/mark";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {dataUrl} from "../dataUrls";

@Injectable({
  providedIn: 'root'
})
export class MarksService {

  marks: Mark[];

  constructor(private http: HttpClient) {
    this.initMarks();
  }


  fetchMarksFromServer(): Observable<Mark[]> {
    return this.http.get<Mark[]>(dataUrl.marks);
  }

  getMarks(): Mark[]{
    return this.marks;
  }

  getMarksOfStudent(id: string): Mark[]{
    return this.marks.filter(mark => mark.studentId === id);
  }

  initMarks(): void {
    this.fetchMarksFromServer().subscribe(marks => this.marks = marks);
  }
}
