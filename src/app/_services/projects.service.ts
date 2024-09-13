import { Injectable, Type } from '@angular/core';
import { Project } from '../_model/Project';
import { Tag } from '../_model/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, name: "Cato's Odyssey", pictures: ["../../assets/catos1.png","../../assets/catos2.png","../../assets/catos3.png"], projectLink: "//https://apps.apple.com/br/app/catos-odyssey/id6471665946?l=en-GB", summary: "Um jogo mobile no estilo Roguelite retro.", description: "Neste projeto atuei como Game Designer. Fui responsavel por estruturar e definir todo o balanceamento, velocidade dos inimigos, controle de vida e experiência necessária para o proximo nivel", tags: [Tag.SWIFT, Tag.Firebase]},
    {id: 1, name: "Bardoo", pictures: ["../../assets/bardoo.jpeg","../../assets/bardoo2.jpeg"], projectLink: "//https://apps.apple.com/br/app/bardoo/id6463300829?l=en-GB", summary: "Aplicativo que auxilia pessoas com problemas de visão em ambientes de cultura", description: "Responsavel pela ideia geral do app, pela sincronizaçäo do aplicatvo com um dispositivo beacon para reconhecimento por distancia, e por aplicar acessbilidade por meio de voice-over e Vvibraçöes", tags: [Tag.SWIFT, Tag.Firebase]},
    {id: 2, name: "Sample .Net App", pictures: ["../../assets/image1.png","../../assets/image2.png","../../assets/image3.png"], projectLink: "//www.github.com", summary: "Fullstack web app developed using React and ASP.NET", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.REACT ,Tag.CSHARP, Tag.ASPNET]},
    {id: 3, name: "Web API Project", pictures: ["../../assets/image1.png","../../assets/image2.png","../../assets/image3.png"], projectLink: "//www.github.com", summary: "Web API Project that was developed for a class project.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.CSHARP, Tag.ASPNET]},
    {id: 4, name: "Chrome Extension", pictures: ["../../assets/image1.png","../../assets/image2.png","../../assets/image3.png"], projectLink: "//www.github.com", summary: "Developed a chrome extension that tracks the prices of furniture.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.JAVASCRIPT]},
    {id: 5, name: "Mobile App", pictures: ["../../assets/image1.png","../../assets/image2.png","../../assets/image3.png"], projectLink: "//www.github.com", summary: "Mobile app developed in java that tracks the departure and arrival of trains.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.Firebase]}
  ];
  constructor() { }

  getProjects() {
    return this.projects;
  }

  getProjectById(id: number) : Project{
    let project = this.projects.find(project => project.id === id);

    if(project === undefined){
      throw new TypeError('Não existe projeto com esse id: ' + id);
    }

    return project
  }
}
