import { Component, OnInit } from '@angular/core';
import {CoursesService} from "../services/courses.service";
import {Course} from "../entities/course";
import {MarksService} from "../services/marks.service";

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {

  constructor(private courseService: CoursesService, private marksService: MarksService) { }

  ngOnInit() {
  }

  getCourses(): Course[] {
    return this.courseService.getCourses();
  }

  getAverageMarks(courseId: string): number {
    return this.marksService.getAverageMarksOfCourse(courseId);
  }
}
