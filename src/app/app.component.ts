import { Component } from '@angular/core';
import { WebServicesService } from './components/service/web-services.service';
 
   
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  val1:number;
  val2:number;
  rta:string[];
  comparar : any;           

  Operacion(){
      
    var divisor=1;
    var arreglos = [];
    var numero=this.val1;
    var numero2 = this.val2;
    const htmlStr: string[] = [];
    
    for(var i=numero; i <= numero2; i++) {	
    
    var divisor=1;
    var arreglos = [];
    var numero=i++;
    
    while(divisor<=numero){
    if(numero%divisor==0){
    arreglos.push(divisor)
    }
    divisor++;
    
    }
    
    
    // Se elevan todos los numeros del arreglo al cuadrado
    var potencias = arreglos.map((arreglo) => Math.pow(arreglo,2));
     //Se hace la suma del arreglo
    var totalsuma= potencias;
    var sum=(new Function("return " +totalsuma.join('+')))(); 
     // Obtener su raíz
    var raiz = Math.sqrt(sum);
    // Comparar si su raíz es un número entero
    this.comparar = raiz;   
    if (raiz === parseInt(this.comparar) ) {
    /*En caso de que sí, entonces su cuadrado es perfecto	*/
    htmlStr.push('f('+this.val1+' - '+this.val2+')​ = Array ( ['+numero+'] => '+sum+' )'+' Cuadrado perfecto ');
    this.rta = htmlStr;
    }else{     
        // Si no, entonces no es un cuadrado perfecto
      //	this.rta =  raiz+' No es cuadrado perfecto';
     }
      
    
     
    }
        
    
    
    
    
    
    
    
    }

}   
