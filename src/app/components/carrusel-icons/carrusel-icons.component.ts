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
    '../../../assets/images/icons/js.svg',
    '../../../assets/images/icons/docker.svg',
    '../../../assets/images/icons/angular.svg',
    '../../../assets/images/icons/bitbucket.svg',
    '../../../assets/images/icons/git.svg',
    '../../../assets/images/icons/bootstrap.svg',
    '../../../assets/images/icons/css3.svg',
    '../../../assets/images/icons/tailwind.svg',
    '../../../assets/images/icons/html5.svg',
    '../../../assets/images/icons/typescript.svg',
    '../../../assets/images/icons/springboot.svg',
    '../../../assets/images/icons/ruby.svg',       
    '../../../assets/images/icons/kubernetes.svg',   
    '../../../assets/images/icons/react.svg',   
    '../../../assets/images/icons/azure.svg',   
    '../../../assets/images/icons/aws.svg',   
    '../../../assets/images/icons/jira.svg',    
    '../../../assets/images/icons/js.svg', 
    '../../../assets/images/icons/docker.svg',
    '../../../assets/images/icons/angular.svg',
    '../../../assets/images/icons/bitbucket.svg',
    '../../../assets/images/icons/git.svg',
    '../../../assets/images/icons/bootstrap.svg',
    '../../../assets/images/icons/css3.svg',
    '../../../assets/images/icons/tailwind.svg',
    '../../../assets/images/icons/html5.svg',
    '../../../assets/images/icons/typescript.svg',
    '../../../assets/images/icons/springboot.svg', 
    '../../../assets/images/icons/ruby.svg',       
    '../../../assets/images/icons/kubernetes.svg',   
    '../../../assets/images/icons/react.svg',   
    '../../../assets/images/icons/azure.svg',   
    '../../../assets/images/icons/aws.svg',   
    '../../../assets/images/icons/jira.svg',  
    ];

    repeatedIcons: string[] = [];

    ngOnInit() {
      // Repetimos los íconos 3 veces para evitar cortes bruscos
      this.repeatedIcons = [...this.icons, ...this.icons, ...this.icons];
    }
}