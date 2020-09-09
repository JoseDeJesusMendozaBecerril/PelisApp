import { Component, OnInit , Input } from '@angular/core'; //input esta informacion va venir de fue 

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styles: [
  ]
})
export class GaleriaComponent implements OnInit {

  @Input('peliculas') peliculas; //viene de fuera
  @Input('titulo') titulo; //viene de fuera donde colocamos la etiqueta ahi le mandamos el parametro <app-galeria parametros ></app-galeria>

  constructor() { }

  ngOnInit(): void {
  }

}
