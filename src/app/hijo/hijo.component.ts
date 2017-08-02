import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'componente-hijo',
    template: `
        <p>Este es el {{title}}</p>
        <ul>
            <li>
                {{propiedad_uno}}
            </li>
            <li>
                {{propiedad_dos.tematica}}
            </li>
        </ul>
        <button (click)="enviar($event)">Enviar datos al padre</button>
    `
})

export class HijoComponent{

    public title: string;
    @Input('texto1') propiedad_uno: string;
    @Input('texto2') propiedad_dos: string;


    @Output() desde_el_hijo = new EventEmitter();

    constructor(){
        this.title = 'Componente Hijo';
    }

    ngOnInit() {
        console.log(this.propiedad_uno);
        console.log(this.propiedad_dos);
    }

    enviar(event) {
        this.desde_el_hijo.emit({
                nombre: 'David Romanillos WEB',
                web: 'sildaviaweb.com'
        });
    }
}