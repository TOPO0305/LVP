import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar.page.html',
  styleUrls: ['./agendar.page.scss'],
})
export class AgendarPage {
  piercingType: string | undefined;
  appointmentDay: string | undefined;
  appointmentTime: string | undefined;

  constructor(private alertController: AlertController) {}

  async agendar() {
    // Validación de los campos
    if (!this.piercingType || !this.appointmentDay || !this.appointmentTime) {
      const alert = await this.alertController.create({
        header: 'Campos incompletos',
        message: 'Por favor, complete todos los campos antes de agendar su cita.',
        buttons: ['OK'],
      });
      await alert.present();
    } else {
      // Lógica para agendar la cita
      // Aquí podrías agregar la lógica para guardar la cita en un backend o similar
      const alert = await this.alertController.create({
        header: 'Cita Agendada',
        message: 'Su cita ha sido agendada correctamente.',
        buttons: ['OK'],
      });
      await alert.present();

      // Reiniciar los campos después de agendar
      this.piercingType = '';
      this.appointmentDay = '';
      this.appointmentTime = '';
    }
  }
}


