import { ViewportScroller } from '@angular/common';
import {
  Component,
  ElementRef,
  signal,
  ViewChild,
  AfterViewInit,
  OnInit,
} from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [TranslateModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit, AfterViewInit {
  @ViewChild('homeLink')
  homeLink!: ElementRef<HTMLAnchorElement>;

  theme = signal<'dark' | 'light'>('light');

  constructor(
    private viewportScroller: ViewportScroller,
    public translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light';

    if (savedTheme) {
      this.theme.set(savedTheme);
      document.body.setAttribute('data-theme', savedTheme);
    }
  }

  toggleTheme() {
    const nextTheme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(nextTheme);
    document.body.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
  }

  /** ✅ Focus without scrolling */
  ngAfterViewInit() {
    this.homeLink.nativeElement.focus({ preventScroll: true });
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (!el) return;

    const yOffset = -80;
    const y =
      el.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    });
  }
}
