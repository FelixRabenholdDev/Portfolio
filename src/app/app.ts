import { Component, signal } from '@angular/core';
import { provideRouter, RouterOutlet } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { Footer } from './shared/footer/footer';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingPage, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  providers = [provideRouter(routes),provideHttpClient()];
  protected readonly title = signal('Portfolio');

  isSticky = false;

  onScrollPositionChange(scrollTop: number) {
    this.isSticky = scrollTop > 0;
  }  
}