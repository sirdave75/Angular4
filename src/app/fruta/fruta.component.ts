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

      public nombre:string = 'David';

      public edad:number = 42;

      public mayorDeEdad:boolean = true;

      public trabajos:Array<any> = ['Carpintero','Programador','Reponedor',52];

      comodin:any = 'Cualquier cosa';


      constructor(){

            console.log(this.trabajos);
      }

}
