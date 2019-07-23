import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentTableComponent} from "./student-table/student-table.component";
import {CourseTableComponent} from "./course-table/course-table.component";
import {NewStudentComponent} from "./new-student/new-student.component";
import {NewCourseComponent} from "./new-course/new-course.component";


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'studentTable', component: StudentTableComponent },
  { path: 'courseTable', component: CourseTableComponent},
  { path: 'newStudent', component: NewStudentComponent},
  { path: 'newCourse', component: NewCourseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
