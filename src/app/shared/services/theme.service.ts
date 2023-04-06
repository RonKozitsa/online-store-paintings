import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

import { ThemeType } from '../components/theme-controller/theme-controller.interface';
import { WINDOW } from '../injection-tokens/window-token';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  currentTheme$ = new BehaviorSubject<ThemeType>(ThemeType.Light);

  constructor(@Inject(WINDOW) private window: Window, @Inject(DOCUMENT) private document: Document) {
    this.setInitialTheme();
  }

  setInitialTheme() {
    const currentTheme = (window.localStorage.getItem('theme') as ThemeType) || ThemeType.Dark;
    this.setCurrentTheme(currentTheme);
  }

  setCurrentTheme(theme: ThemeType): void {
    this.currentTheme$.next(theme);
    this.document.body.className = theme;
    this.window.localStorage.setItem('theme', theme);
  }

  toggleTheme(): void {
    const newTheme = this.currentTheme$.value === ThemeType.Dark ? ThemeType.Light : ThemeType.Dark;
    this.setCurrentTheme(newTheme);
  }
}
