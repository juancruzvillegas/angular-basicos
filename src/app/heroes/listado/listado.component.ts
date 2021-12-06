import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: String[] = ['Spiderman', 'Ironman', 'Hulk', 'Capitan America']
  heroeBorrado: String = '';
  borrarHeroe():void{
  // this.heroes.splice(0,1);
    this.heroeBorrado = this.heroes.shift() || '';
    
  }
  
}
