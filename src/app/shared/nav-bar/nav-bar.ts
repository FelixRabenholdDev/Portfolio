import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.html',
  styleUrls: ['./nav-bar.scss']
})
export class NavBar {

  @ViewChild('burgerIcon', { static: false }) burgerIcon!: ElementRef<HTMLImageElement>;
  @ViewChild('burgerBtn', { static: false }) burgerBtn!: ElementRef<HTMLButtonElement>;

  menuOpen = false;

  toggleMenu() {
    const btn = this.burgerBtn.nativeElement;

    if (!this.menuOpen) {
      this.menuOpen = true;
      btn.classList.add('open');
      btn.classList.remove('closing');
    } else {
      this.menuOpen = false;
      btn.classList.add('closing');
      btn.classList.remove('open');
    }
  }

  closeMenu() {
    this.menuOpen = false;
    const btn = this.burgerBtn.nativeElement;
    btn.classList.add('closing');
    btn.classList.remove('open');
  }
}

