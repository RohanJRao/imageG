import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-viewer',
  templateUrl: './result-viewer.component.html',
  styleUrls: ['./result-viewer.component.css']
})
export class ResultViewerComponent {
  @Input() resultUrl: string | null = null;
}
