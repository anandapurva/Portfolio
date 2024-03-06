import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectPopupComponent } from '../project-popup/project-popup.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() projectData:any;

  constructor(private dialog: MatDialog){}
  openDialog(): void {
    const dialogRef = this.dialog.open(ProjectPopupComponent, {
      width: '500px', // Set the width as needed
      panelClass: 'dialog-background',
      data: this.projectData // Pass data to the dialog
    });
  }

}
