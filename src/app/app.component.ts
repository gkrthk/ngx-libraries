import { Component } from '@angular/core'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reusablecomponents';
  latitude:any;
  longitude:any;

  getLocation(event){
    console.log(event);
    this.latitude = event.latitude;
    this.longitude = event.longitude;
  }
}
