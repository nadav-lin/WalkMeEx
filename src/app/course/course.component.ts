import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../entities/course";
import {MarksService} from "../services/marks.service";
import {CoursesService} from "../services/courses.service";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input() course: Course;
  @Input() isNewCoursePage= false;
  edit = false;

  constructor(private marksService: MarksService, private coursesService: CoursesService) { }

  ngOnInit() {
    if (!this.course) {
      this.edit = true;
    }
  }

  submit(id: string, name: string): void {
    if (!!id && !!name) {
      let newCourse = new Course(id, name);
      this.coursesService.addOrUpdateCourse(newCourse);
    }
    this.toggleEditOrNewCourse()
  }

  toggleEditOrNewCourse(): void {
    if (!this.isNewCoursePage){
      this.toggleEdit();
    } else {
      this.course= new Course('','');
    }
  }

  toggleEdit(): void {
    this.edit = !this.edit;
  }

  getAverageMarks(courseId: string): number {
    return this.marksService.getAverageMarksOfCourse(courseId);
  }
}
