import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { PortraitPositionService } from '../../shared/services/portrait-position.service';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.html',
  styleUrls: ['./burger-menu.scss'],
})
export class BurgerMenu {

  @ViewChild('burger', { static: false }) burgerRoot!: ElementRef<HTMLDivElement>;
  @ViewChild('burgerIcon', { static: false }) burgerIcon!: ElementRef<HTMLImageElement>;
  @ViewChild('burgerBtn', { static: false }) burgerBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('navLinks', { static: false }) navLinks!: ElementRef<HTMLUListElement>;

  menuOpen = false;
  private scrollY = 0;
  private readonly breakpoint = 900;

  constructor(private portraitPosition: PortraitPositionService) {}

  @HostListener('window:resize')
  onResize(): void {
    if (this.menuOpen && window.innerWidth > this.breakpoint) {
      this.closeMenu();
    }
  }

  toggleMenu() {
    const btn = this.burgerBtn.nativeElement;
    const root = this.burgerRoot.nativeElement;
    const nav = this.navLinks.nativeElement;

    if (!this.menuOpen) {
      this.menuOpen = true;
      this.lockBodyScroll();
      this.portraitPosition.sync();

      btn.classList.add('open');
      btn.classList.remove('closing');
      root.classList.add('open');
      root.classList.remove('closing');
      nav.classList.add('open');
    } else {
      this.menuOpen = false;
      this.unlockBodyScroll();

      btn.classList.add('closing');
      btn.classList.remove('open');
      root.classList.add('closing');
      root.classList.remove('open');
      nav.classList.remove('open');
    }
  }

  closeMenu() {
    if (!this.menuOpen) return;
    this.menuOpen = false;
    this.unlockBodyScroll();

    const btn = this.burgerBtn.nativeElement;
    const root = this.burgerRoot.nativeElement;
    const nav = this.navLinks.nativeElement;

    btn.classList.add('closing');
    btn.classList.remove('open');
    root.classList.add('closing');
    root.classList.remove('open');
    nav.classList.remove('open');
  }

  private lockBodyScroll(): void {
    this.scrollY = window.scrollY;
    
    document.body.style.position = 'fixed';
    document.body.style.top = `-${this.scrollY}px`;
    document.body.style.width = '100%';
  }

  private unlockBodyScroll(): void {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo({ top: this.scrollY, left: 0, behavior: 'instant' as ScrollBehavior });
  }
}