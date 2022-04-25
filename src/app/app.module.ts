import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FolderComponent } from './folder/folder.component';
import { MatComponentsModule } from './mat-components.module';

@NgModule({
  declarations: [
    AppComponent,
    FolderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
