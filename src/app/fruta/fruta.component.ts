/**
 * Created by binll on 04/07/2017.
 */
import { Component } from '@angular/core';

@Component({
    selector:   'fruta',
    templateUrl: './fruta.component.html'
})
export class FrutaComponent{
      public nombre_componente = 'Componente de fruta';
      public listado_frutas = 'Naranja, Manzana, Pera, Sandía';

      public nombre:string;

      public edad:number;

      public mayorDeEdad:boolean;

      public trabajos:Array<any> = ['Carpintero','Programador','Reponedor',52];

      comodin:any;


      constructor(){
            this.nombre = 'David Romanillos';
            this.edad = 42;
            this.mayorDeEdad = true;
            this.comodin = 'SI';

      }


      ngOnInit(){

          this.cambiarNombre();
          this.cambiarEdad(45);
          console.log(this.nombre + " - " + this.edad);


      //VAriables y alcance
        var uno = 8;
        var dos = 15;
        if(uno === 8) {
            let uno = 3; //actua dentro del if (del bloque)
            var dos = 88; // actúa de forma global


            console.log ('Dentro del if ' + uno + " " +dos);
        }
          console.log ('Fuera del if ' + uno + " " + dos);
      }



      cambiarNombre(){
          this.nombre = 'Pedro';
      }
      cambiarEdad(edad){
          this.edad = edad;
      }

}
