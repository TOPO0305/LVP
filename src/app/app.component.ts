import { Component } from '@angular/core';
import { Router } from '@angular/router';  
import { MenuController } from '@ionic/angular';  // Importa MenuController

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private router: Router, private menuCtrl: MenuController) {}

  cerrarSesion() {
    console.log('Sesión cerrada');
    this.router.navigate(['/login']);
    this.menuCtrl.close();
  }

  async navegarYCerrar(ruta: string) {
    await this.router.navigate([ruta]);
    this.menuCtrl.close();
  }
}
