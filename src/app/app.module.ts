import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContatoComponent } from './contato/contato.component';
import { ProjectCarComponent } from './project-car/project-car.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProjectModelComponent } from './project-model/project-model.component';
import { CarouselModule } from 'ngx-bootstrap/carousel'
import { AccordionModule } from 'ngx-bootstrap/accordion'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    PortifolioComponent,
    ResumeComponent,
    ContatoComponent,
    ProjectCarComponent,
    ProjectModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    AccordionModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
