import { Component, OnInit } from '@angular/core';

//Importaciones para hacer uso de las rutas
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  title = 'ProyectoGit';
  constructor(private route:ActivatedRoute, router:Router){

  }
  
 ngOnInit(): void {
    this.route.params.subscribe(params=>{
      
    });
  }

}
