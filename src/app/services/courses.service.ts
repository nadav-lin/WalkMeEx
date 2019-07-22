import { Injectable } from '@angular/core';
import {Course} from "../entities/course";
import {Observable} from "rxjs/index";
import {dataUrl} from "../dataUrls";
import {Mark} from "../entities/mark";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses: Course[];

  constructor(private http: HttpClient) {
    this.initCourses();
  }

  fetchCoursesFromServer(): Observable<Course[]> {
    return this.http.get<Mark[]>(dataUrl.courses);
  }

  getCourses(): Course[]{
    return this.courses;
  }

  initCourses(): void {
    this.fetchCoursesFromServer().subscribe(courses => this.courses = courses);
  }
}
