import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  

import { AppComponent } from './app.component';
import { MainComponent } from './common/main/main.component';
import { FooterComponent } from './common/footer/footer.component';
import { WebServicesService } from './components/service/web-services.service';  
  
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent  
  ],    
  imports: [
    BrowserModule,
     FormsModule
  ],
  providers: [
    WebServicesService
  ],
  bootstrap: [AppComponent]
})
 
export class AppModule { }
