import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface ProjectTech {
  name: string;
  icon: string;
}

interface Project {
  title: string;
  durationKey: string;
  aboutKey: string;
  workProcessKey: string;
  groupKey: string;
  live: string;
  github: string;
  technologies: ProjectTech[];
  image: string;
}

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './my-projects.html',
  styleUrls: ['./my-projects.scss'],  
})
export class MyProjects {
  selectedTab = 0;

  projectData: Project[] = [
    {
      title: 'Pokedex',
      durationKey: 'PROJECTS.POKEDEX.DURATION',
      aboutKey: 'PROJECTS.POKEDEX.ABOUT',
      workProcessKey: 'PROJECTS.POKEDEX.WORK_PROCESS',
      groupKey: 'PROJECTS.POKEDEX.GROUP',
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
      durationKey: 'PROJECTS.SHROOMIE.DURATION',
      aboutKey: 'PROJECTS.SHROOMIE.ABOUT',
      workProcessKey: 'PROJECTS.SHROOMIE.WORK_PROCESS',
      groupKey: 'PROJECTS.SHROOMIE.GROUP',
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
      durationKey: 'PROJECTS.JOIN.DURATION',
      aboutKey: 'PROJECTS.JOIN.ABOUT',
      workProcessKey: 'PROJECTS.JOIN.WORK_PROCESS',
      groupKey: 'PROJECTS.JOIN.GROUP',
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
      durationKey: 'PROJECTS.CODERR.DURATION',
      aboutKey: 'PROJECTS.CODERR.ABOUT',
      workProcessKey: 'PROJECTS.CODERR.WORK_PROCESS',
      groupKey: 'PROJECTS.CODERR.GROUP',
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