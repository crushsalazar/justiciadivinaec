import { Routes } from '@angular/router';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { InicioComponent } from './inicio/inicio.component'; 
import { CabeceradosComponent } from './cabecerados/cabecerados.component';
import { ServiciosComponent } from './servicios/servicios.component'; 
export const routes: Routes = [
    { path: 'navegacion', component: NavegacionComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'cabecerados', component: CabeceradosComponent },
    { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Ruta por defecto
    { path: '**', redirectTo: '/inicio' } // Ruta para manejar errores (opcional)
  ];

