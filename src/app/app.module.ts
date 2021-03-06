import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatToolbarModule, MatButtonModule } from '@angular/material';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfessionalExperienceComponent } from './components/professional-experience/professional-experience.component';
import { EducationComponent } from './components/education/education.component';

const MATERIAL_IMPORTS = [MatToolbarModule, MatButtonModule]


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ProjectsComponent,
    ProfessionalExperienceComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ...MATERIAL_IMPORTS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
