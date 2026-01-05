import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

@Injectable()
export class ProjectsPaginatorIntl extends MatPaginatorIntl {
  override changes = new Subject<void>();

  constructor(private translate: TranslateService) {
    super();
    this.setLabels();

    // Update labels when language changes
    this.translate.onLangChange.subscribe(() => this.setLabels());
  }

  setLabels() {
    this.itemsPerPageLabel = this.translate.instant('PAGINATOR.ITEMS_PER_PAGE');
    this.nextPageLabel = this.translate.instant('PAGINATOR.NEXT');
    this.previousPageLabel = this.translate.instant('PAGINATOR.PREVIOUS');
    this.firstPageLabel = this.translate.instant('PAGINATOR.FIRST');
    this.lastPageLabel = this.translate.instant('PAGINATOR.LAST');
    this.changes.next(); // refresh paginator
  }
}
