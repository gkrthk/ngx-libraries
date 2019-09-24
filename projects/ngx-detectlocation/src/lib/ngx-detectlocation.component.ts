import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'ngx-detectlocation',
  template: `
  <div #detect_location class="detect-location">  
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Location" [ngModel]="Address">
      <div class="input-group-append">
        <button class="btn btn-primary" [style.background-color]="IconBgColor" [style.color]="IconColor"
          (click)="detectLocation()">
          <fa-icon [icon]="[FaIconStyle, FaIconName]"></fa-icon>
        </button>
      </div>
      <div *ngIf="showError">Unable to detect location.</div>
    </div>
    </div>  
  `,
  styleUrls: ['./ngx-detectlocation.component.scss']
})
export class NgxDetectlocationComponent implements OnInit {
  public lat:any;
  public lon:any;
  public showError:boolean = false;
  @Input() Address:string;
  @Input() FaIconName: string = 'map-marker-alt';
  @Input() FaIconStyle: string = 'fas';
  @Input() IconBgColor:string = 'blue';
  @Input() IconColor:string = 'white';
  @Output() public locations = new EventEmitter<Object>();  

  ngOnInit() {    
    
  }

  detectLocation() {
    navigator.geolocation.getCurrentPosition(({coords}) => {      
        this.lat = coords.latitude;
        this.lon = coords.longitude;                
        this.locations.emit({latitude:this.lat,longitude:this.lon});
    }, error => {
       console.log(error);
       this.showError = true;
    });
}

}
