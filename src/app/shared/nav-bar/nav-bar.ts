
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-nav-bar',
//   imports: [],
//   templateUrl: './nav-bar.html',
//   styleUrl: './nav-bar.scss',
// })
// export class NavBar {}

import { Component, ElementRef, ViewChild } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.html',
  styleUrls: ['./nav-bar.scss']
})
export class NavBar {
  
  @ViewChild('burgerIcon', { static: false }) burgerIcon!: ElementRef<HTMLImageElement>;

  menuOpen = false;

  frames = [
    'assets/img/burger_menu_t0.svg',
    'assets/img/burger_menu_t1.svg',
    'assets/img/burger_menu_t2.svg',
    'assets/img/burger_menu_t3.svg'
  ];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.animateBurger();
  }

  closeMenu() {
    this.menuOpen = false;
  }

  animateBurger() {
    let index = 0;
    interval(70)
      .pipe(take(this.frames.length))
      .subscribe(() => {
        this.burgerIcon.nativeElement.src = this.frames[index];
        index++;
      });
  }
}

