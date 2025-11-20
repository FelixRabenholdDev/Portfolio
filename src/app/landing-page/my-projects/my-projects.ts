import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  imports: [CommonModule],
  templateUrl: './my-projects.html',
  styleUrl: './my-projects.scss',
})
export class MyProjects {

  tabs = ['DA Bubble', 'Sharkie', 'Join', 'Ongoing Project'];

  selectedTab = 0;

  projectData = [
    {
      title: 'DA Bubble',
      duration: '3 weeks',
      about: 'This is a Slack clone with real-time messaging and a clean interface.',
      workProcess: 'Modularized components, clean naming, and extensive documentation.',
      group: 'Worked in a team of 4, I implemented the chat and UI logic.',
      live: '#',
      github: '#'
    },
    {
      title: 'Sharkie',
      duration: '1 week',
      about: 'A jump-and-run game built with JavaScript.',
      workProcess: 'Structured code with classes and separated logic + rendering.',
      group: 'Solo project.',
      live: '#',
      github: '#'
    },
    {
      title: 'Join',
      duration: '2 weeks',
      about: 'Kanban board like Trello.',
      workProcess: 'Reusable components and TypeScript-based architecture.',
      group: 'Worked in a team of 3, built task-controls and UI.',
      live: '#',
      github: '#'
    },
    {
      title: 'Ongoing Project',
      duration: '—',
      about: 'Currently in development.',
      workProcess: 'Planning, UI prototyping and component structuring.',
      group: '—',
      live: '#',
      github: '#'
    },
  ];
}
