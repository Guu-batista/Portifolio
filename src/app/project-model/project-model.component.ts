import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Project } from '../_model/Project';

@Component({
  selector: 'app-project-model',
  templateUrl: './project-model.component.html',
  styleUrls: ['./project-model.component.css']
})
export class ProjectModelComponent {

  project = {} as Project;
pictures: any;

  constructor(public bsModelRef: BsModalRef) {

  }
}
