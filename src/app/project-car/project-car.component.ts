import { Component, Input } from '@angular/core';
import { Project } from '../_model/Project';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModelComponent } from '../project-model/project-model.component';

@Component({
  selector: 'app-project-car',
  templateUrl: './project-car.component.html',
  styleUrls: ['./project-car.component.css']
})
export class ProjectCarComponent {
  @Input() project = {} as Project;
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {

  }

  OpenProjectModal() {

    const modalOptions: ModalOptions = {
      class: "modal-lg",
      initialState: {
        project: this.project
      }
    };

    this.bsModalRef = this.modalService.show(ProjectModelComponent, modalOptions); 
  }
}
