import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';
import { ResultViewerComponent } from './components/result-viewer/result-viewer.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ImageUploaderComponent,
    ImageViewerComponent,
    ResultViewerComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
