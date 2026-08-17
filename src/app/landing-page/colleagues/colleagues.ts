import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

interface Colleague {
  name: string;
  project: string;
  quoteKey: string;
  linkedin: string;
}

@Component({
  selector: 'app-colleagues',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './colleagues.html',
  styleUrls: ['./colleagues.scss'],
})
export class Colleagues {
  colleagues: Colleague[] = [
    {
      name: 'Paul Angeles Chaquire',
      project: 'Kochwelt',
      quoteKey: 'COLLEAGUES.PAUL.QUOTE',
      linkedin: 'https://www.linkedin.com/in/paul-angeles-chaquire/',
    },
    {
      name: 'Jürgen Malinowski',
      project: 'Join',
      quoteKey: 'COLLEAGUES.JUERGEN.QUOTE',
      linkedin: 'https://www.linkedin.com/in/j%C3%BCrgen-malinowski-289253425/',
    },
    {
      name: 'Emil Marsal',
      project: 'Join',
      quoteKey: 'COLLEAGUES.EMIL.QUOTE',
      linkedin: 'https://www.linkedin.com/in/emil-marsal-13a4aa423/',
    },
  ];
}