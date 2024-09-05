import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-car',
  templateUrl: './project-car.component.html',
  styleUrls: ['./project-car.component.css']
})
export class ProjectCarComponent {
  @Input() projectName: string = "";
  @Input() projectDescription: string = "";
  @Input() projectLang: string = "";
}
