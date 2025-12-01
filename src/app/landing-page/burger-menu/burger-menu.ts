import { Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-burger-menu',
  imports: [],
  templateUrl: './burger-menu.html',
  styleUrl: './burger-menu.scss',
})
export class BurgerMenu {
  
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
