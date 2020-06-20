import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfessionalExperience } from 'src/app/domain/professional-experience.interface';

@Component({
  selector: 'app-professional-experience',
  templateUrl: './professional-experience.component.html',
  styleUrls: ['./professional-experience.component.scss']
})
export class ProfessionalExperienceComponent implements OnInit {
  entries: ProfessionalExperience[];

  constructor(
    private http: HttpClient
    ) { }

  ngOnInit() {
    this.http.get('assets/professional-experience.json').subscribe((res: ProfessionalExperience[]) => {
      this.entries = res;
    })
  }

}
