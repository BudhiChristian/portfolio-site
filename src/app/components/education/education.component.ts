import { Component, OnInit } from '@angular/core';
import { EducationInformation } from 'src/app/domain/education.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educationInformation: EducationInformation[];
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('assets/education.json').subscribe((res: EducationInformation[]) => {
      this.educationInformation = res;
    })
  }

}
