import {Component} from '@angular/core';


@Component({
    selector: 'plantillas',
    templateUrl: './plantillas.component.html'
})

export class PlantillasComponent{
    public titulo: string;
    public administrador;
    public dato_externo =  "David Romanillos";
    public identity = {
        id: 1,
        web: 'sildaviaweb.com',
        tematica : 'Album familiar'
    }

    constructor(){
        this.titulo = "Pantillas ngTemplate en Angular";
        this.administrador = true;
    }

    cambiar(value){
        this.administrador = value;
    }
}