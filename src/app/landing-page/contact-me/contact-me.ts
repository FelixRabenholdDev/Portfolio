import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { TranslatePipe } from '@ngx-translate/core';

interface MailResponse {
  success: boolean;
  error?: string;
}

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

  private readonly mailTest = false;

  private readonly post = {
    endPoint: 'https://felixrabenhold.de/backend/sendMail.php',
    body: (payload: typeof this.contactData) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',        
      },
    },
  };

  send(ngForm: NgForm): void {
    this.submitSuccess = false;
    this.submitError = false;
    
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
        this.resetForm(ngForm);
      }, 500);
      return;
    }

    this.http
      .post<MailResponse>(this.post.endPoint, this.post.body(this.contactData), this.post.options)
      .subscribe({
        next: (response) => {
          this.isSending = false;
          if (response.success) {
            this.submitSuccess = true;
            this.resetForm(ngForm);
          } else {
            this.submitError = true;
            console.error('Mail-Versand fehlgeschlagen:', response.error);
          }
        },
        error: (error) => {
          console.error(error);
          this.isSending = false;
          this.submitError = true;
          console.error(error);
        },
      });
  }

  isValid(value: string | null | undefined): boolean {
    return !!value && value.trim().length > 0;
  }

  isEmailValid(email: string | null | undefined): boolean {
    if (!email) return false;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.trim());
  }

  onAutofillDetected(event: AnimationEvent, field: 'name' | 'email' | 'message'): void {
  if (event.animationName !== 'onAutoFillStart') return;

  const input = event.target as HTMLInputElement | HTMLTextAreaElement;

  setTimeout(() => {
    this.contactData[field] = input.value;

    if (field === 'name') this.nameError = false;
    if (field === 'email') this.emailError = false;
    if (field === 'message') this.messageError = false;
    });
  }

  private resetForm(ngForm: NgForm): void {
    this.contactData = { name: '', email: '', message: '' };
    this.privacyAccepted = false;
    ngForm.resetForm();
  }
}
