import { CommonModule, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-intro',
  imports: [RouterLink,CommonModule, TranslateModule],
  templateUrl: './intro.html',
  styleUrl: './intro.css',
})
export class Intro {
  show = false;
  currentLang: string = 'en';
  constructor(private viewportScroller: ViewportScroller, private translate: TranslateService){
    this.currentLang = this.translate.currentLang || 'en';
  this.translate.onLangChange.subscribe((event) => {
    this.currentLang = event.lang;
  });
  }

  ngOnInit() {
    // Trigger animation after component loads
    setTimeout(() => {
      this.show = true;
    }, 50); // tiny delay to allow initial rendering
  }
  scrollToAboutMe() {
    const yOffset = -80;
    const y = document.getElementById('story')!.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
