import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cartelera:any;
  populares:any;
  infantiles:any;

  constructor(public ps:PeliculasService) {
    this.ps.getCartelera().subscribe( data =>{
      console.log(data);
      this.cartelera = data;
    });

    this.ps.getPopulares().subscribe( data =>{
      console.log(data);
      this.populares = data;
    });

    this.ps.getPopularesNinos().subscribe( data =>{
      console.log(data);
      this.infantiles = data;
    });

   }

  ngOnInit(): void {
  }

}
