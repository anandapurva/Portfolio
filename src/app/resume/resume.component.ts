import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  constructor(private titleService:Title, private http: HttpClient) {
    this.titleService.setTitle('Apurva - Resume')
  }

  downloadFile(): void {
    const fileUrl = "../../assets/Apurva_Resume.pdf"; // Replace with the actual path to your file

    this.http.get(fileUrl, { responseType: 'arraybuffer' })
      .subscribe((data: ArrayBuffer) => {
        const blob = new Blob([data], { type: 'application/pdf' });

        // Trigger file download
        const link = document.createElement('a'); // It creates anchor tag
        link.href = window.URL.createObjectURL(blob);
        link.download = 'Resume.pdf'; // Replace with the desired filename
        link.click();
      });
  }

}
