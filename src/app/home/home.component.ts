import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // using angular pre-built services Title to set our title.
  constructor(private titleService:Title) {
    this.titleService.setTitle('Apurva-Home')
  }

}
