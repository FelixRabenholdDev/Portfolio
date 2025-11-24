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
    this.emailError = !this.isValid(this.email);
    this.messageError = !this.isValid(this.message);

    if (!this.privacyAccepted) {
      this.privacyError = true;
      return;
    }

    if (this.nameError || this.emailError || this.messageError || this.privacyError) return;

    this.privacyError = false;
  }

  isValid(value: string) {
    return value.trim().length > 0;
  }
}
