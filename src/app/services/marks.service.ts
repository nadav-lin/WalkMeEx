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

  constructor(private http: HttpClient) { }

  fetchMarksFromServer(): Observable<Mark[]> {
    return this.http.get<Mark[]>(dataUrl.students);
  }
}
