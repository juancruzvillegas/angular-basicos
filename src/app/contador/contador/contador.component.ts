import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1> {{ title }} </h1>
        <h1>La base es: {{ base }} </h1>
        <! –– strong es para negritas y {{  }} para mostrar el valor de una propiedad -->
        <button (click)= "acumular(base)"> + <strong>{{ base }}</strong></button>

        <span> {{ numero}} </span>

        <button (click)= "acumular(-base)"> - {{ base }}</button>
    `
})


export class ContadorComponent {
        title: string = 'Contador App';
        numero: number = 10;
        base: number = 5;
    
        acumular (valor: number){
        this.numero += valor;
         /*
        como son funciones que hacen lo mismo hacemos una 
        que cumpla esos objetivos: acumular()

        sumar(){
            this.numero += 1;
        }

        restar(){
            this.numero += -1;
        }
        */
        }
}