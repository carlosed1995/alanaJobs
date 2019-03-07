import { Injectable } from '@angular/core';

@Injectable()
export class WebServicesService {
  
  promesaDatos(){
  return new Promise ((resultado) => {
    setTimeout(() => {
      resultado('Promesa ejecutada');
    }, 5000);     
             
  });  
  }   
       
  constructor() { }

}
