import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  showContactForm = false;

  contact = {
    name: '',
    email: '',
    message: ''
  };

  openContactForm(event: Event) {
    event.preventDefault();
    this.showContactForm = true;
  }

  closeContactForm() {
    this.showContactForm = false;
  }

  sendMail() {
    const mailto = `mailto:tomas.allendesd@gmail.com?subject=Contacto de ${this.contact.name}&body=${encodeURIComponent(this.contact.message + '\n\nCorreo: ' + this.contact.email)}`;
    window.location.href = mailto;
    this.closeContactForm();
  }
}
