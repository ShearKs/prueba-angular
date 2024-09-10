import { Component } from '@angular/core';
import { TablaEjemploComponent } from './tabla-ejemplo/tabla-ejemplo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TablaEjemploComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
