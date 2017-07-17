/**
 * Created by binll on 04/07/2017.
 */
import { Component } from '@angular/core';
import { Empleado } from './empleado';
@Component({
    selector: 'empleado',
    templateUrl: './empleado.component.html'
})

export class EmpleadoComponent{
    public titulo = 'Componente Empleados';
    public empleado:Empleado;
    public trabajadores:Array<Empleado>;

    public trabajador_externo:boolean;

    public color:string;
    public color_seleccionado:string;

    constructor(){
        this.empleado = new Empleado('David Romanillos',42,'Programador',true);
        this.trabajadores = [
            new Empleado('Sergio Mestre',41,'Programador',false),
            new Empleado('David Romanillos',42,'Programador',true),
            new Empleado('Angel Luis Lasierra',52,'Gerente',true)
        ];
        this.trabajador_externo = true;
        this.color = 'blue';
        this.color_seleccionado = '#CCC';
    }

    ngOnInit(){
        console.log(this.trabajadores);

    }

    cambiarExterno(valor){
        this.trabajador_externo = valor;
    }
    showLog(){
        console.log(this.color_seleccionado)
    }
}
