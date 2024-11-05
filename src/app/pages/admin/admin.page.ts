import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor() { }

  ngOnInit() {
    // Lógica para cargar datos específicos del administrador
  }

  logout() {
    // Lógica para cerrar sesión
    console.log('Sesión cerrada');
  }

}
