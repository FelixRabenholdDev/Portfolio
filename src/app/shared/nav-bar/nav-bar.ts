// import { Component, ElementRef, ViewChild } from '@angular/core';
// import { interval, take } from 'rxjs';

// @Component({
//   selector: 'app-nav-bar',
//   templateUrl: './nav-bar.html',
//   styleUrls: ['./nav-bar.scss']
// })
// export class NavBar {
  
//   @ViewChild('burgerIcon', { static: false }) burgerIcon!: ElementRef<HTMLImageElement>;

//   menuOpen = false;

//   frames = [
//     'assets/img/burger_menu_t0.svg',
//     'assets/img/burger_menu_t1.svg',
//     'assets/img/burger_menu_t2.svg',
//     'assets/img/burger_menu_t3.svg'
//   ];

//   toggleMenu() {
//     this.menuOpen = !this.menuOpen;
//     this.animateBurger();
//   }

//   closeMenu() {
//     this.menuOpen = false;
//   }

//   animateBurger() {
//     let index = 0;
//     interval(200)
//       .pipe(take(this.frames.length))
//       .subscribe(() => {
//         this.burgerIcon.nativeElement.src = this.frames[index];
//         index++;
//       });
//   }
// }


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
      // Menü öffnet
      this.menuOpen = true;
      btn.classList.add('open');
      btn.classList.remove('closing');
    } else {
      // Menü schließt
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

