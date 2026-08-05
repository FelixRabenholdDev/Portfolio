import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-projects.html',
  styleUrls: ['./my-projects.scss'],  
})
export class MyProjects {
  tabs = ['1. Pokedex', '2. Shroomie', '3. Join', '4. Coderr'];
  selectedTab = 0;

  projectData = [
    {
      title: 'Pokedex',
      duration: '2 weeks',
      about: `Use of the Pokedex API for an individual Pokedex Site.`,
      workProcess: 'Modularized components, clean naming, and extensive documentation.',
      group: 'Solo project.',
      live: 'https://pokedex.felixrabenhold.de/',
      github: 'https://github.com/FelixRabenholdDev/Pokedex',
      technologies: [
        { name: 'HTML', icon: 'assets/img/HTML_project.svg' },
        { name: 'JavaScript', icon: 'assets/img/JavaScript_project.svg' },
        { name: 'CSS', icon: 'assets/img/CSS_project.svg' },
      ],
      image: 'assets/img/Pokedex.jpg',
    },
    {
      title: 'Shroomie',
      duration: '1 week',
      about: 'A jump-and-run game built with JavaScript.',
      workProcess: 'Structured code with classes and separated logic + rendering.',
      group: 'Solo project.',
      live: 'https://shroomie.felixrabenhold.de/',
      github: 'https://github.com/FelixRabenholdDev/Shroomy',
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
      group: 'Worked in a team of 5, built backend database with firebase.',
      live: 'https://join.felixrabenhold.de/',
      github: 'https://github.com/FelixRabenholdDev/Join',
      technologies: [
        { name: 'Angular', icon: 'assets/img/Angular_project.svg' },
        { name: 'TypeScript', icon: 'assets/img/TypeScript_project.svg' },
        { name: 'Firebase', icon: 'assets/img/Firebase_project.svg' },
      ],
      image: 'assets/img/Join.jpg',
    },
    {
      title: 'Coderr',
      duration: '3 weeks',
      about: 'Freelancer-developer platform.',
      workProcess: 'Deploying server and database logic.',
      group: 'Solo project.',
      live: 'https://coderr.felixrabenhold.de/',
      github: 'https://github.com/FelixRabenholdDev/CoderrBE',
      technologies: [
        { name: 'Python', icon: 'assets/img/icons/python.svg' },
        { name: 'Django', icon: 'assets/img/icons/django.svg' },
        { name: 'Docker', icon: 'assets/img/icons/docker.svg' },
        { name: 'Linux', icon: 'assets/img/icons/linux.svg' },
      ],
      image: 'assets/img/Coderr.jpg',
    },
  ];

  selectTab(index: number) {
  this.selectedTab = index;
  }
}
