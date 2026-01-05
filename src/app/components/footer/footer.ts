import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [TranslateModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
   constructor(private viewportScroller: ViewportScroller,public translate: TranslateService){
    translate.setDefaultLang('en');
  }
  scrollTo(sectionId: string) {
  const el = document.getElementById(sectionId);
  if (el) {
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
  userName = 'Muhammad';

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
