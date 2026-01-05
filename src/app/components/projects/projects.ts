import { Component, computed, ElementRef, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, PageEvent, MatPaginatorIntl } from '@angular/material/paginator';
import { projects } from '../../../backend/server';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectsPaginatorIntl } from '../../core/services/services/paginator.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatPaginatorModule, TranslateModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class Projects {
  @ViewChild('all') all!: ElementRef<HTMLAnchorElement>;
  private _selectedCategory = signal<'all' | 'website' | 'html&css' | 'javascript'>('all');

  get selectedCategory() {
    return this._selectedCategory;
  }

  set selectedCategory(value) {
    this._selectedCategory = value;
  }

  projects = signal(projects);

  setCategory(category: 'all' | 'website' | 'html&css' | 'javascript') {
    this.selectedCategory.set(category);
    this.pageIndex.set(0);
  }

  filteredProjects = computed(() =>
    this.selectedCategory() === 'all'
      ? this.projects()
      : this.projects().filter(p => p.category === this.selectedCategory())
  );

  pageSize = signal(4);
  pageIndex = signal(0);

  paginatedProjects = computed(() => {
    const start = this.pageIndex() * this.pageSize();
    return this.filteredProjects().slice(start, start + this.pageSize());
  });
    // Default Focus on Home Icon in navbar
  ngAfterViewInit() {
    this.all.nativeElement.focus();
  }
  onPageChange(event: PageEvent) {
    this.pageIndex.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
  }
}
