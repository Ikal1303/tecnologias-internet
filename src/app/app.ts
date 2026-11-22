import { Component } from '@angular/core';

export interface Producto {
  nombre: string;
  precio: number;
  disponible: boolean;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nombreTienda: string = 'Tienda para el Estudiante';
  encargado: string = 'Erik Alberto Ortega Torrico';
  numeroSucursal: number = 3;
  tiendaAbierta: boolean = true;
  categorias: string[] = [
    'Cuadernos y Libretas',
    'Mochilas y Estuches',
    'Calculadoras y Papelería'
  ];

  producto: Producto = {
    nombre: 'Mochila Universitaria Impermeable',
    precio: 185,
    disponible: true
  };
}
