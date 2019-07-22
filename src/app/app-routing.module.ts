import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentTableComponent} from "./student-table/student-table.component";
import {CourseTableComponent} from "./course-table/course-table.component";
import {StudentComponent} from "./student/student.component";


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'studentTable', component: StudentTableComponent },
  { path: 'courseTable', component: CourseTableComponent},
  { path: 'newStudent', component: StudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
