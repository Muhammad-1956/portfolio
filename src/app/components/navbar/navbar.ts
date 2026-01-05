
import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-navbar',
  imports: [TranslateModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  @ViewChild('homeLink') homeLink!: ElementRef<HTMLAnchorElement>;

    constructor(private viewportScroller: ViewportScroller,public translate: TranslateService){
      translate.setDefaultLang('en')
  }
    theme= signal<'dark' | 'light'>('light');

 ngOnInit() {
 const savedTheme = localStorage.getItem('theme') as 'dark' | 'light';

 if (savedTheme) {
 this.theme.set(savedTheme);
 document.body.setAttribute('data-theme', savedTheme);
 }
 }

 toggleTheme() {
 this.theme() === 'dark' ? this.theme.set('light') : this.theme.set('dark') ;
 document.body.setAttribute('data-theme', this.theme());
 localStorage.setItem('theme', this.theme());
 }

  // Default Focus on Home Icon in navbar
  ngAfterViewInit() {
    this.homeLink.nativeElement.focus();
  }

  // Select Language
  switchLanguage(lang: string) {
      this.translate.use(lang);
  }

  // Scroll To Section
  scrollTo(sectionId: string) {
  const el = document.getElementById(sectionId);
  if (el) {
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
  }
}

// <div class="flex items-center justify-between py-1 px-2">
//  <div class="bg-amber-300 dark:bg-black p-2 rounded">
//  <h1 class="text-black dark:text-white">
//  Change Detection
//  </h1>
//  </div>

//  <button
//  (click)="toggleTheme()"
//  class="border px-3 py-1 rounded-md cursor-pointer"
//  >
//  {{ theme === 'dark' ? '☀️ Light' : '🌙 Dark' }}
//  </button>
// </div>
