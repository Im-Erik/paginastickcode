import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CarruselIconsComponent } from "./components/carrusel-icons/carrusel-icons.component";
import ContactFormComponent from './components/contact-form/contact-form.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CarruselIconsComponent, ContactFormComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Stickcode - Desarrollamos tus sueños';
}


