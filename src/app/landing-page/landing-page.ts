import { Component} from '@angular/core';
import { WhyMe } from './why-me/why-me';
import { MySkills } from './my-skills/my-skills';
import { MyProjects } from './my-projects/my-projects';
import { Colleagues } from './colleagues/colleagues';
import { ContactMe } from './contact-me/contact-me';
import { AboveTheFold } from './above-the-fold/above-the-fold';

@Component({
  selector: 'app-landing-page',
  imports: [AboveTheFold, WhyMe, MySkills, MyProjects, Colleagues, ContactMe],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {
  scrollTo(section: string) {
    const target = document.getElementById(section);

  if (target) {
    const y = target.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
}
