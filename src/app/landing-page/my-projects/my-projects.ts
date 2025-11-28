import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-projects.html',
  styleUrls: ['./my-projects.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition('* => *', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class MyProjects {
  tabs = ['1. DA Bubble', '2. Sharkie', '3. Join', '4. Ongoing Project'];
  selectedTab = 0;

  projectData = [
    {
      title: 'DA Bubble',
      duration: '3 weeks',
      about: `This App is a Slack Clone App. 
      It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.`,
      workProcess: 'Modularized components, clean naming, and extensive documentation.',
      group: 'Worked in a team of 4, I implemented the chat and UI logic.',
      live: '#',
      github: '#',
      technologies: [
        { name: 'Angular', icon: 'assets/img/Angular_project.svg' },
        { name: 'TypeScript', icon: 'assets/img/TypeScript_project.svg' },
        { name: 'Firebase', icon: 'assets/img/Firebase_project.svg' },
      ],
      image: 'assets/img/DA_Bubble.jpg',
    },
    {
      title: 'Sharkie',
      duration: '1 week',
      about: 'A jump-and-run game built with JavaScript.',
      workProcess: 'Structured code with classes and separated logic + rendering.',
      group: 'Solo project.',
      live: '#',
      github: '#',
      technologies: [
        { name: 'HTML', icon: 'assets/img/HTML_project.svg' },
        { name: 'JavaScript', icon: 'assets/img/JavaScript_project.svg' },
        { name: 'CSS', icon: 'assets/img/CSS_project.svg' },
      ],
      image: 'assets/img/Shroomie.jpg',
    },
    {
      title: 'Join',
      duration: '2 weeks',
      about: 'Kanban board like Trello.',
      workProcess: 'Reusable components and TypeScript-based architecture.',
      group: 'Worked in a team of 3, built task-controls and UI.',
      live: '#',
      github: '#',
      technologies: [
        { name: 'Angular', icon: 'assets/img/Angular_project.svg' },
        { name: 'TypeScript', icon: 'assets/img/TypeScript_project.svg' },
        { name: 'Firebase', icon: 'assets/img/Firebase_project.svg' },
      ],
      image: 'assets/img/Join.jpg',
    },
    {
      title: 'Ongoing Project',
      duration: '—',
      about: 'Currently in development.',
      workProcess: 'Planning, UI prototyping and component structuring.',
      group: '—',
      live: '#',
      github: '#',
      technologies: [
        { name: 'Angular', icon: 'assets/img/Angular_project.svg' },
        { name: 'TypeScript', icon: 'assets/img/TypeScript_project.svg' },
        { name: 'Firebase', icon: 'assets/img/Firebase_project.svg' },
        { name: 'HTML', icon: 'assets/img/HTML_project.svg' },
        { name: 'JavaScript', icon: 'assets/img/JavaScript_project.svg' },
        { name: 'CSS', icon: 'assets/img/CSS_project.svg' },
      ],
      image: 'assets/img/Coming_soon.jpg',
    },
  ];

  selectTab(index: number) {
    this.selectedTab = index;
  }
}
