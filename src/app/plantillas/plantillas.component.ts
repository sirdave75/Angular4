import {Component} from '@angular/core';


@Component({
    selector: 'plantillas',
    templateUrl: './plantillas.component.html'
})

export class PlantillasComponent{
    public titulo: string;
    public administrador;

    constructor(){
        this.titulo = "Pantillas ngTemplate en Angular";
        this.administrador = true;
    }

    cambiar(value){
        this.administrador = value;
    }
}