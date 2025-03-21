import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-inicio',
  standalone: true,
   imports: [NgbCarouselModule,CommonModule, RouterModule], 
  templateUrl: './inicio.component.html',
  
  styleUrls: ['./inicio.component.scss','./iniciocss.component.scss'],

})
export class InicioComponent {

  isCollapsed = true;
  menuOpen: boolean = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    console.log('Menu toggled, current state:', this.menuOpen);
  }

  
  closeForm(): void {
    const formElement = document.getElementById("consultationForm");
    if (formElement) {
      formElement.classList.add("hidden"); // Ocultar con clase "hidden"
      // Alternativa si "hidden" no funciona:
      formElement.style.display = "none";
    }
  }
}
