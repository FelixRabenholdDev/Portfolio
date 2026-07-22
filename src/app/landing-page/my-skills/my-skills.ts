import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

interface Skill {
  icon: string;
  name: string;
}

@Component({
  selector: 'app-my-skills',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './my-skills.html',
  styleUrls: ['./my-skills.scss'],
})
export class MySkills {
  skills: Skill[] = [
    { icon: 'assets/img/icons/angular.svg', name: 'Angular' },
    { icon: 'assets/img/icons/typescript.svg', name: 'TypeScript' },
    { icon: 'assets/img/icons/javascript.svg', name: 'JavaScript' },
    { icon: 'assets/img/icons/html.svg', name: 'HTML' },
    { icon: 'assets/img/icons/css.svg', name: 'CSS' },
    { icon: 'assets/img/icons/rest-api.svg', name: 'REST API' },
    { icon: 'assets/img/icons/firebase.svg', name: 'Firebase' },
    { icon: 'assets/img/icons/git.svg', name: 'Git' },
    { icon: 'assets/img/icons/material-design.svg', name: 'Material Design' },
    { icon: 'assets/img/icons/scrum.svg', name: 'Scrum' },
    { icon: 'assets/img/icons/python.svg', name: 'Python' },
    { icon: 'assets/img/icons/django.svg', name: 'Django' },
    { icon: 'assets/img/icons/linux.svg', name: 'Linux' },
    { icon: 'assets/img/icons/postgresql.svg', name: 'PostgreSQL' },
    { icon: 'assets/img/icons/docker.svg', name: 'Docker' },
  ];

  learningSkills: Skill[] = [
    { icon: 'assets/img/icons/java.svg', name: 'Java' },
    { icon: 'assets/img/icons/kubernetes.svg', name: 'Kubernetes' },
  ];
}
