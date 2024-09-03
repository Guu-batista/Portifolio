import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContatoComponent } from './contato/contato.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'portifolio', component: PortifolioComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'contato', component: ContatoComponent},
  {path: '**', component: HomeComponent, pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
