import { Component , OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectModal } from '../models/project-modal';
import { ProjectsService } from '../service/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

projectDetails = {} as ProjectModal[];

constructor(private titleService:Title, private projectService: ProjectsService) {
  this.titleService.setTitle('Apurva - Portfolio')
}

ngOnInit() {
  this.projectDetails = this.projectService.getData();
}

}
