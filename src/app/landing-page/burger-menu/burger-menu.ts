import { Component, ElementRef, ViewChild } from '@angular/core';

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

  toggleMenu() {
    const btn = this.burgerBtn.nativeElement;
    const root = this.burgerRoot.nativeElement;
    const nav = this.navLinks.nativeElement;

    if (!this.menuOpen) {
      this.menuOpen = true;
      // Button classes (optional)
      btn.classList.add('open');
      btn.classList.remove('closing');
      // Root container classes used by CSS
      root.classList.add('open');
      root.classList.remove('closing');
      // Show nav links
      nav.classList.add('open');
    } else {
      this.menuOpen = false;
      btn.classList.add('closing');
      btn.classList.remove('open');
      root.classList.add('closing');
      root.classList.remove('open');
      nav.classList.remove('open');
    }
  }

  closeMenu() {
    this.menuOpen = false;
    const btn = this.burgerBtn.nativeElement;
    const root = this.burgerRoot.nativeElement;
    const nav = this.navLinks.nativeElement;

    btn.classList.add('closing');
    btn.classList.remove('open');
    root.classList.add('closing');
    root.classList.remove('open');
    nav.classList.remove('open');
  }
}
