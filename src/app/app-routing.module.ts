import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentTableComponent} from "./student-table/student-table.component";


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'studentTable', component: StudentTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
