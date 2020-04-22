import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  baseRef: string = '';

  constructor() { }

  ngOnInit() {
    this.baseRef = window.location.href;
  }

}
