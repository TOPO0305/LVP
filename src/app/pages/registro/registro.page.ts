import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  formularioRegistro: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private toastController: ToastController
  ) {
    this.formularioRegistro = this.formBuilder.group({
      nombre: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmacionPassword: ['', Validators.required],
    });
  }

  async guardar() {
    // Verificar si el formulario es válido
    if (this.formularioRegistro.valid) {
      // Aquí se puede agregar la lógica para crear el usuario
      // Ejemplo: Llamar a un servicio para guardar en la base de datos

      // Mostrar mensaje de éxito
      const toast = await this.toastController.create({
        message: 'Su usuario se ha creado correctamente.',
        duration: 2000,
        color: 'success',
      });
      toast.present();

      // Redirigir a la página de login
      this.navCtrl.navigateRoot('/login');
    } else {
      // Mostrar un mensaje de error si el formulario no es válido
      const toast = await this.toastController.create({
        message: 'Por favor, complete todos los campos correctamente.',
        duration: 2000,
        color: 'danger',
      });
      toast.present();
    }
  }
}
