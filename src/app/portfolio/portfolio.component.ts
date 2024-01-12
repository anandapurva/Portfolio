import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
// using angular pre-built services Title to set our title.
constructor(private titleService:Title) {
  this.titleService.setTitle('Apurva-Home')
}

}
