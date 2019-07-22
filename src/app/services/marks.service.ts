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

  initMarks(): void {
    this.fetchMarksFromServer().subscribe(marks => this.marks = marks);
  }

  getMarksOfStudent(id: string): Mark[]{
    return this.marks.filter(mark => mark.studentId === id);
  }

  getAverageMarksofStudent(id: string): number{
    let studentMarks = this.marks.filter(mark => mark.studentId === id);
    return this.averageOfMarks(studentMarks);
  }

  averageOfMarks(marks: Mark[]){
    if (marks.length === 0){
      return 0;
    }
    return marks.filter(mark => mark.mark !== -1).reduce((sum, mark) => sum+ mark.mark, 0) / marks.length;
  }

  getAverageMarksOfCourse(courseId: string): number {
    let courseMarks = this.marks.filter(mark => mark.courseId === courseId);
    return this.averageOfMarks(courseMarks);
  }
}
