import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { LegalNotice } from './legal-notice/legal-notice';

export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'legal', component: LegalNotice },
];
