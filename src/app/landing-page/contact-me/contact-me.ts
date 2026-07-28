import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me',
  imports: [FormsModule, CommonModule, TranslatePipe],
  templateUrl: './contact-me.html',
  styleUrls: ['./contact-me.scss'],  
})
export class ContactMe {
  private http = inject(HttpClient);

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

  isSending = false;
  submitSuccess = false;
  submitError = false;

  private readonly mailTest = true;

  private readonly post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: typeof this.contactData) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',        
      },
      responseType: 'text' as const,
    },
  };

  send(ngForm: NgForm): void {
    this.submitSuccess = false;
    this.submitError = false;

    console.log('Form data:', this.contactData);
    
    this.nameError = !this.isValid(this.contactData.name);
    this.messageError = !this.isValid(this.contactData.message);
    this.emailError = !this.isEmailValid(this.contactData.email);
    this.privacyError = !this.privacyAccepted;

    if (this.nameError || this.emailError || this.messageError || this.privacyError) {
      return;
    }

    this.isSending = true;

    if (this.mailTest) {
      setTimeout(() => {
        this.isSending = false;
        this.submitSuccess = true;
        ngForm.resetForm();
      }, 500);
      return;
    }

    this.http
      .post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
      .subscribe({
        next: () => {
          this.isSending = false;
          this.submitSuccess = true;
          ngForm.resetForm();
        },
        error: (error) => {
          console.error(error);
          this.isSending = false;
          this.submitError = true;
        },
      });
  }

  isValid(value: string) {    
    return value.trim().length > 0;
  }

  isEmailValid(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.trim());
  }
}
