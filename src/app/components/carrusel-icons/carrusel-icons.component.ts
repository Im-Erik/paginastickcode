import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carrusel-icons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrusel-icons.component.html',
  styleUrl: './carrusel-icons.component.scss',
})
export class CarruselIconsComponent {
  icons: string[] = [
    '../../../assets/images/icons/js.png',
    '../../../assets/images/icons/java.png',
    '../../../assets/images/icons/react.png',
    '../../../assets/images/icons/docker.png',
    '../../../assets/images/icons/angular.png',
    '../../../assets/images/icons/git.png',
    '../../../assets/images/icons/bootstrap.png',
    '../../../assets/images/icons/typescript.png',
    '../../../assets/images/icons/js.png',
    '../../../assets/images/icons/java.png',
    '../../../assets/images/icons/react.png',
    '../../../assets/images/icons/docker.png',
    '../../../assets/images/icons/angular.png',
    '../../../assets/images/icons/git.png',
    '../../../assets/images/icons/bootstrap.png',
    '../../../assets/images/icons/typescript.png',
    ];

    repeatedIcons: string[] = [];

    ngOnInit() {
      // Repetimos los íconos 3 veces para evitar cortes bruscos
      this.repeatedIcons = [...this.icons, ...this.icons, ...this.icons];
    }
}
