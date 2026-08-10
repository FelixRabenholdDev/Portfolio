import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { NavBar } from '../shared/nav-bar/nav-bar';
import { BurgerMenu } from '../landing-page/burger-menu/burger-menu';

@Component({
  selector: 'app-privacy-policy',
  imports: [CommonModule, NavBar, BurgerMenu, TranslatePipe],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy {
  readonly restrictionReasons = [
    'PRIVACY.GENERAL_INFO.RESTRICTION_LIST.ITEM_1',
    'PRIVACY.GENERAL_INFO.RESTRICTION_LIST.ITEM_2',
    'PRIVACY.GENERAL_INFO.RESTRICTION_LIST.ITEM_3',
    'PRIVACY.GENERAL_INFO.RESTRICTION_LIST.ITEM_4',
  ];

  readonly currentDate = new Date().toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}