import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // using angular pre-built services Title to set our title.
  constructor(private titleService:Title, private http: HttpClient) {
    this.titleService.setTitle('Apurva-Home')
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
