import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { NavBar } from './nav-bar/nav-bar';
import { WhyMe } from './landing-page/why-me/why-me';
import { MySkills } from './landing-page/my-skills/my-skills';
import { MyProjects } from './landing-page/my-projects/my-projects';
import { Colleagues } from './landing-page/colleagues/colleagues';
import { ContactMe } from './landing-page/contact-me/contact-me';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingPage, NavBar, WhyMe, MySkills, MyProjects, Colleagues, ContactMe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Portfolio');
}
