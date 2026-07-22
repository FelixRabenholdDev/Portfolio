import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type AppLanguage = 'de' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private translate = inject(TranslateService);
  private readonly storageKey = 'app-language';

  currentLang: AppLanguage = 'de';

  init(): void {
    const saved = localStorage.getItem(this.storageKey) as AppLanguage | null;
    const browserLang = navigator.language?.startsWith('de') ? 'de' : 'en';
    const lang: AppLanguage = saved ?? browserLang;

    this.setLanguage(lang);
  }

  setLanguage(lang: AppLanguage): void {
    this.currentLang = lang;
    this.translate.use(lang);
    localStorage.setItem(this.storageKey, lang);
  }

  toggleLanguage(): void {
    this.setLanguage(this.currentLang === 'de' ? 'en' : 'de');
  }
}