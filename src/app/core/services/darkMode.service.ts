import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DarkModeService {
  darkMode = signal(true); // <-- default is dark

  constructor() {
    // Add the 'dark' class on page load
    if (this.darkMode()) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  toggle() {
    this.darkMode.update(value => !value);
    document.documentElement.classList.toggle('dark', this.darkMode());
  }
}
