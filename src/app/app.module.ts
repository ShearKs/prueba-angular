import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TablaEjemploComponent } from './tabla-ejemplo/tabla-ejemplo.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, TablaEjemploComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
