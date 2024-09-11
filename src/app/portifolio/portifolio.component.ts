import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_model/Project';
import { Tag } from '../_model/Tag';
import { ProjectsService } from '../_services/projects.service';


@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.css']
})
export class PortifolioComponent implements OnInit{

  projects = {} as Project[]

  constructor(private titleservice: Title, private projectService: ProjectsService) {
    this.titleservice.setTitle('Gustavo Batista - Portifólio')
  }
  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }
}
