import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../model/Project';
import { Tag } from '../model/Tag';


@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.css']
})
export class PortifolioComponent {

  project: Project = {
    id: 0,
    name: 'nome de um projeto aqui',
    sumary: 'Descrição do projeto aqui',
    description: '',
    projectLink: '',
    tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
    pictures: [ ]

  }

  constructor(private titleservice: Title) {
    this.titleservice.setTitle('Gustavo Batista - Portifólio')
  }
}
