import { NgModule } from '@angular/core';
import { NgxDetectlocationComponent } from './ngx-detectlocation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [NgxDetectlocationComponent],
  imports: [
    FormsModule,
    CommonModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  exports: [NgxDetectlocationComponent]
})
export class NgxDetectlocationModule { 
  constructor(){
    library.add(faMapMarkerAlt);
  }
}
