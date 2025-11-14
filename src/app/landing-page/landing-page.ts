import { Component, EventEmitter, Output } from '@angular/core';
import { WhyMe } from './why-me/why-me';
import { MySkills } from './my-skills/my-skills';
import { MyProjects } from './my-projects/my-projects';
import { Colleagues } from './colleagues/colleagues';
import { ContactMe } from './contact-me/contact-me';

@Component({
  selector: 'app-landing-page',
  imports: [WhyMe, MySkills, MyProjects, Colleagues, ContactMe],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {

  @Output() scrollPositionChange = new EventEmitter<number>();

  onScroll(event: any) {
    const scrollTop = event.target.scrollTop;
    this.scrollPositionChange.emit(scrollTop);
  }

}
