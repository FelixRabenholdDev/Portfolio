import { Component} from '@angular/core';
import { WhyMe } from './why-me/why-me';
import { MySkills } from './my-skills/my-skills';
import { MyProjects } from './my-projects/my-projects';
import { Colleagues } from './colleagues/colleagues';
import { ContactMe } from './contact-me/contact-me';
import { AboveTheFold } from './above-the-fold/above-the-fold';
import { BurgerMenu } from './burger-menu/burger-menu';

@Component({
  selector: 'app-landing-page',
  imports: [AboveTheFold, WhyMe, MySkills, MyProjects, Colleagues, ContactMe, BurgerMenu],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {
}
