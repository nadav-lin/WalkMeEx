import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentTableComponent } from './student-table/student-table.component';
import {HttpClientModule} from "@angular/common/http";
import { CourseTableComponent } from './course-table/course-table.component';
import {StudentComponent} from "./student/student.component";
import { CourseComponent } from './course/course.component';
import { NewStudentComponent } from './new-student/new-student.component';
import { NewCourseComponent } from './new-course/new-course.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentTableComponent,
    CourseTableComponent,
    StudentComponent,
    CourseComponent,
    NewStudentComponent,
    NewCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
