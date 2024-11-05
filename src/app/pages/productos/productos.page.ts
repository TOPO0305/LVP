import { Component } from '@angular/core';

interface Producto {
  nombre: string;
  valor: number;
  descripcion: string;
  categoria: string;
}

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage {
  categorias: string[] = ['Piercings', 'Accesorios', 'Cuidados'];
  productos: Producto[] = [
    { nombre: 'Piercing de Oreja', valor: 5000, descripcion: 'Piercing de acero quirúrgico para oreja.', categoria: 'Piercings' },
    { nombre: 'Piercing de Nariz', valor: 4500, descripcion: 'Piercing pequeño para nariz.', categoria: 'Piercings' },
    { nombre: 'Piercing de Labio', valor: 6000, descripcion: 'Piercing para labio con diseño especial.', categoria: 'Piercings' },
    { nombre: 'Anillo de Plata', valor: 8000, descripcion: 'Anillo de plata ajustable.', categoria: 'Accesorios' },
    { nombre: 'Cadena de Acero', valor: 7000, descripcion: 'Cadena de acero inoxidable.', categoria: 'Accesorios' },
    { nombre: 'Solución Salina', valor: 3000, descripcion: 'Solución para limpieza de piercings.', categoria: 'Cuidados' },
  ];
  categoriaSeleccionada: string = 'Piercings';

  constructor() {}

  // Método para seleccionar una categoría
  seleccionarCategoria(categoria: string) {
    this.categoriaSeleccionada = categoria;
  }

  // Filtrar productos por categoría seleccionada
  get productosFiltrados() {
    return this.productos.filter(producto => producto.categoria === this.categoriaSeleccionada);
  }
}

