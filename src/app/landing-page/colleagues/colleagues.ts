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
      linkedin: '#',
    },
    {
      name: 'Jürgen Malinowski',
      project: 'Join',
      quoteKey: 'COLLEAGUES.JUERGEN.QUOTE',
      linkedin: '#',
    },
    {
      name: 'Emil Marsal',
      project: 'Join',
      quoteKey: 'COLLEAGUES.EMIL.QUOTE',
      linkedin: '#',
    },
  ];
}