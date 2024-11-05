import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  formularioLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private toastController: ToastController
  ) {
    this.formularioLogin = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]], // Mínimo 6 caracteres
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]], // Mínimo 6 caracteres
    });
  }

  async ingresar() {
    // Verificar si el formulario es válido
    if (this.formularioLogin.valid) {
      // Aquí se puede agregar la lógica de autenticación
      // Ejemplo: Llamar a un servicio para verificar credenciales

      // Redirigir a la página de inicio
      this.navCtrl.navigateRoot('/home');
    } else {
      // Mostrar un mensaje de error si los campos están vacíos
      const toast = await this.toastController.create({
        message: 'complete todos los campos y siga los siguientes pasos: - el nombre de usuario debe contener un minimo de 6 caracteres  - la contraseña de debe contener un minimo de 8 caracteres  ',
        duration: 2000,
        color: 'danger',
      });
      toast.present();
    }
  }
}


