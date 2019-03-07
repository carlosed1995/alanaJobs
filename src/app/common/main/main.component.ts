import { Component, OnInit } from '@angular/core';
import { WebServicesService } from '../../components/service/web-services.service';
 

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})     
export class MainComponent implements OnInit {
   
  constructor(
    private WebServicesService : WebServicesService 
  ) {
    WebServicesService.promesaDatos().then(resultado =>
    console.log(resultado));
   }
   
  ngOnInit() {
  }

}
