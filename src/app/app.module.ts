import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentTableComponent } from './student-table/student-table.component';
import {HttpClientModule} from "@angular/common/http";
import { CourseTableComponent } from './course-table/course-table.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentTableComponent,
    CourseTableComponent
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
