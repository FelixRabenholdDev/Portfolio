import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { LegalNotice } from './legal-notice/legal-notice';
import { PrivacyPolicy } from './privacy-policy/privacy-policy';

export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'legal', component: LegalNotice },
  { path: 'privacy', component: PrivacyPolicy },
];
