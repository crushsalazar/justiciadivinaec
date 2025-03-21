import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent {
  isMenuOpen = false;
  activeDropdown: string | null = null;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.activeDropdown = null; // Reset submenús al abrir/cerrar menú principal
    const menu = document.getElementById("menu");
    if (menu) {
      menu.classList.toggle("active", this.isMenuOpen);
    }
  }
   // Ángulo de rotación actual para móviles
   rotation: number = 0;
   // Bandera que indica si el dispositivo es móvil (sin hover)
   isMobile: boolean = false;
   // Control del menú (si lo necesitas para abrir/cerrar)
 
   ngOnInit() {
     // Detecta si el dispositivo admite hover y tiene puntero fino (normal en desktop)
     // Si NO se cumple, se considera móvil o touch
     this.isMobile = !window.matchMedia('(hover: hover) and (pointer: fine)').matches;
   }
 
   rotateArrow(event: Event): void {
     event.preventDefault(); // Evita cualquier acción por defecto (si es necesario)
     // Si deseas también abrir/cerrar el menú, alterna activeDropdown
     if (this.activeDropdown === 'areas') {
       this.activeDropdown = null;
     } else {
       this.activeDropdown = 'areas';
     }
     // Cada tap incrementa la rotación 180°
     this.rotation += 180;
   }
  
}