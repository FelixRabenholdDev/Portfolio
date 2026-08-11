import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PortraitPositionService {
  private portraitEl: HTMLElement | null = null;

  registerPortrait(el: HTMLElement): void {
    this.portraitEl = el;
    this.sync();
  }

  sync(): void {
    if (!this.portraitEl) {
      console.warn('[PortraitPositionService] Kein Portrait registriert.');
      return;
    }

    const rect = this.portraitEl.getBoundingClientRect();
    const root = document.documentElement.style;

    root.setProperty('--portrait-top', `${rect.top}px`);
    root.setProperty('--portrait-left', `${rect.left}px`);
    root.setProperty('--portrait-width', `${rect.width}px`);
    root.setProperty('--portrait-height', `${rect.height}px`);
  }
}