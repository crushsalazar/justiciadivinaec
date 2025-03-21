import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CabeceradosComponent } from './cabecerados/cabecerados.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './servicios/servicios.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule,ServiciosComponent,InicioComponent,CabeceradosComponent, NavegacionComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }