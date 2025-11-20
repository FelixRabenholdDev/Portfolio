import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingPage, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Portfolio');

  isSticky = false;

  onScrollPositionChange(scrollTop: number) {
    this.isSticky = scrollTop > 0;
  }  
}