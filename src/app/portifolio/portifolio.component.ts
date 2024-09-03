import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.css']
})
export class PortifolioComponent {

  constructor(private titleservice: Title) {
    this.titleservice.setTitle('Gustavo Batista - Portifólio')
  }
}
