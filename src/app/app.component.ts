import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  processedImageUrl: string | null = null;

  onImageSelected(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.processedImageUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}
