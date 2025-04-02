import { Component } from '@angular/core';
import { ImageProcessingService } from './services/image-processing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Studio Ghibli Image Converter';
  originalImageUrl: string | null = null;
  convertedImageUrl: string | null = null;

  constructor(private imageProcessingService: ImageProcessingService) {}

  onImageSelected(file: File): void {
    const reader = new FileReader();
    reader.onload = async () => {
      this.originalImageUrl = reader.result as string;
      const img = new Image();
      img.src = this.originalImageUrl;
      img.onload = async () => {
        this.convertedImageUrl = await this.imageProcessingService.convertToGhibliStyle(img);
      };
    };
    reader.readAsDataURL(file);
  }
}
