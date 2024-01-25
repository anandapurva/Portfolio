import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-project-popup',
  templateUrl: './project-popup.component.html',
  styleUrl: './project-popup.component.css'
})
export class ProjectPopupComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}

  slickConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

}
