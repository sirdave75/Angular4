import { Component, Input} from '@angular/core';

@Component({
    selector: 'componente-hijo',
    template: `
        <p>Este es el {{title}}</p>
        <ul>
            <li>
                {{propiedad_uno}}
            </li>
            <li>
                {{propiedad_dos.web}}
            </li>
            <li>
                {{propiedad_dos.tematica}}
            </li>
        </ul>
    `
})

export class HijoComponent{

    public title: string;
    @Input('texto1') propiedad_uno: string;
    @Input('texto2') propiedad_dos: string;

    constructor(){
        this.title = 'Componente Hijo';
    }

    ngOnInit(){

        console.log(this.propiedad_uno);
        console.log(this.propiedad_dos);
    }
}