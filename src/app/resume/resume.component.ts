import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  isWorkExperienceOpen: boolean = false;
  isEducationOpen: boolean = false;
  isCertificateOpen: boolean = false;
  isSkillOpen: boolean = false;


  constructor(private titleservice: Title, private renderer: Renderer2) {
    this.titleservice.setTitle('Gustavo Batista - Currículo')
  }

  downloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/Resume.pdf');
    link.setAttribute('download', 'Resume.pdf'); 
    link.click();
    link.remove(); 
  }
}
