import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectInfo } from 'src/app/domain/project.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: ProjectInfo[];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('assets/projects.json').subscribe((res: ProjectInfo[]) => {
      this.projects = res;
    })
  }

}
