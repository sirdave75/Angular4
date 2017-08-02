import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

declare var jQuery: any;
declare  var $: any;

@Component({
    templateUrl: './contacto.component.html',
    selector: 'contacto'
})

export  class ContactoComponent{
    public  titulo = 'Página de contacto de la web';
    public parametro;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ){}

    ngOnInit(){
            this._route.params.forEach((params: Params) =>{
                this.parametro = params['page'];
            });
    }

    redirigir(){
        this._router.navigate(['./contacto','sildaviaweb.com']);
    }

    redirigir2(){
        this._router.navigate(['./pagina-principal']);
    }



    public toggleTitle() {
        console.log('Le he dado click al botón');
        $('.title').slideToggle();
    }
}