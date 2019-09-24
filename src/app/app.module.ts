import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxDetectlocationModule } from "ngx-detectlocation";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDetectlocationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
