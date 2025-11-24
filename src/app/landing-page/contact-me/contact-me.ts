import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss',  
})
export class ContactMe {
  name = '';
  email = '';
  message = '';
  nameError = false;
  emailError = false;
  messageError = false;
  privacyAccepted = false;
  privacyError = false;

  send() {
    this.nameError = !this.isValid(this.name);
    this.messageError = !this.isValid(this.message);

    this.emailError = !this.isEmailValid(this.email);

    if (!this.privacyAccepted) {
      this.privacyError = true;
    }

    if (this.nameError || this.emailError || this.messageError || this.privacyError) {
      return;
    }

    this.privacyError = false;
  }

  isValid(value: string) {
    return value.trim().length > 0;
  }

  isEmailValid(email: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.trim());
  }
}
