import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NavBar } from '../shared/nav-bar/nav-bar';
import { BurgerMenu } from '../landing-page/burger-menu/burger-menu';

@Component({
  selector: 'app-legal-notice',
  imports: [NavBar, BurgerMenu, TranslatePipe],
  templateUrl: './legal-notice.html',
  styleUrls: ['./legal-notice.scss'],
})
export class LegalNotice {
  readonly currentDate = new Date().toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}