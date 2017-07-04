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

    constructor(){
        this.empleado = new Empleado('David Romanillos',42,'Programador',true);
        this.trabajadores = [
            new Empleado('David Romanillos',42,'Programador',true);
            new Empleado('Sergio Mestre',41,'Programador',true);
            new Empleado('Angel Luis Lasierra',52,'Gerente',true);
        ];
    }

    ngOnInit(){
        console.log(this.trabajadores);

    }
}
