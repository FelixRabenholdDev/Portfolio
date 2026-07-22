import { Component, signal, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { Footer } from './shared/footer/footer';
import { LanguageService } from './shared/services/language.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingPage, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit { 
  protected readonly title = signal('Portfolio');

  isSticky = false;

  private languageService = inject(LanguageService);

  ngOnInit(): void {
    this.languageService.init();
  }

  onScrollPositionChange(scrollTop: number) {
    this.isSticky = scrollTop > 0;
  }  
}