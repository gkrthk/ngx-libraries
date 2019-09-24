# Ngx-Libraries

    **A set of reusable angular components as libraries**

# Libraries

## Location Input Component
  ###### Properties
   - Output
      * locations -- Output event containing latitude and longitude
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
           


