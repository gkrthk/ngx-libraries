# ngx-detectlocation

    **Angular 8 based location component with ability to detect current location and returns coordinates**

## Properties
   - Output
      * locations -- Output containing latitude and longitude
   - Input
      * Address -- Address to be added in the input field.
      * FaIconName -- Font Awesome Icon for button in string. (e.g) 'map-marker-alt'
      * FaIconStyle -- Font Awesome Icon style in string. (e.g) 'fas'
      * IconBgColor -- Background color of icon in string. 
      * IconColor -- color of Icon in string.    

  ###### How To Use Library      
   ```
   import { NgxDetectlocationModule } from "ngx-detectlocation"; 
        
   <ngx-detectlocation (locations)=location($event) [FaIconName]="map-marker-alt" [FaIconStyle]="fas"></ngx-detectlocation>
   ```
    
# To Run Demo
    ```
        npm install
        npm run start
    ```
