import { Component, Input } from '@angular/core';
import { Project } from '../model/Project';

@Component({
  selector: 'app-project-car',
  templateUrl: './project-car.component.html',
  styleUrls: ['./project-car.component.css']
})
export class ProjectCarComponent {
  @Input() project = {} as Project;

}
