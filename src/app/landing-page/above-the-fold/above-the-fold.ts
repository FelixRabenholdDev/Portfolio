import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NavBar } from '../../shared/nav-bar/nav-bar';
import { PortraitPositionService } from '@shared/services/portrait-position.service';

@Component({
  selector: 'app-above-the-fold',
  imports: [NavBar],
  templateUrl: './above-the-fold.html',
  styleUrls: ['./above-the-fold.scss'],
})

export class AboveTheFold implements AfterViewInit {
  @ViewChild('portrait', { static: true }) portraitRef!: ElementRef<HTMLImageElement>;

  private rafId: number | null = null;

  constructor(private portraitPosition: PortraitPositionService) {}

  ngAfterViewInit(): void {
    this.portraitPosition.registerPortrait(this.portraitRef.nativeElement);
  }

  @HostListener('window:resize')
  @HostListener('window:scroll')
  onViewportChange(): void {
    if (this.rafId !== null) return;
    this.rafId = requestAnimationFrame(() => {
      this.portraitPosition.sync();
      this.rafId = null;
    });
  }
}