import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
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
}