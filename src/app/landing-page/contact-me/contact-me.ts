import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact-me',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss',  
})
export class ContactMe {

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: ''
  };

  nameError = false;
  emailError = false;
  messageError = false;
  privacyAccepted = false;
  privacyError = false;
  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  send(ngForm: NgForm) {
    this.nameError = !this.isValid(this.contactData.name);
    this.messageError = !this.isValid(this.contactData.message);

    this.emailError = !this.isEmailValid(this.contactData.email);

    if (!this.privacyAccepted) {
      this.privacyError = true;
    }

    if (this.nameError || this.emailError || this.messageError || this.privacyError) {
      return;
    }

    this.privacyError = false;

    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }

  isValid(value: string) {
    return value.trim().length > 0;
  }

  isEmailValid(email: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.trim());
  }
}
