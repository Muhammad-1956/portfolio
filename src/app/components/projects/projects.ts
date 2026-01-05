import { Component, computed, ElementRef, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, PageEvent, MatPaginatorIntl } from '@angular/material/paginator';
import { TranslateModule } from '@ngx-translate/core';

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

  projects = signal([
  {
    title: 'Shop Easy Full Stack Ecommerce',
    tech: 'Angular - Firebase',
    category: 'website',
    image: 'assets/shop-easy.png',
    alt: 'Shop Easy Website',
    tooltip: 'Shop Easy Website',
    demoLink: 'https://workspace-bd51d.firebaseapp.com/'
  },
  {
    title: 'Movie 4 U Full Stack Website',
    tech: 'Angular - Firebase',
    category: 'website',
    image: 'assets/movie-4u.png',
    alt: 'Movie 4 U Full Stack Website',
    tooltip: 'Movie 4 U Full Stack Website',
    demoLink: 'https://movie-49b38.web.app/'
  },
  {
    title: 'Dental Landing Page',
    tech: 'HTML & CSS',
    category: 'html&css',
    image: 'assets/dental.png',
    alt: 'Dental Landing Page',
    tooltip: 'Dental Landing Page',
    demoLink: ''
  },
  {
    title: 'Ratesland Landing Page',
    tech: 'HTML & CSS',
    category: 'html&css',
    image: 'assets/ratesland.png',
    alt: 'Ratesland Landing Page',
    tooltip: 'Ratesland Landing Page',
    demoLink: ''
  },
  {
    title: 'Quote Generator App',
    tech: 'JavaScript',
    category: 'javascript',
    image: 'assets/quote-generator.png',
    alt: 'Quote Generator App',
    tooltip: 'Quote Generator App',
    demoLink: 'https://muhammad-1956.github.io/Quote-Generator/quoteGenerator.html'
  },
  {
    title: '3 Column Preview Card Component',
    tech: 'HTML & CSS',
    category: 'html&css',
    image: 'assets/column-preview.png',
    alt: '3 Column Preview Card Component',
    tooltip: '3 Column Preview Card Component',
    demoLink: 'https://muhammad-1956.github.io/3-column-preview-card-component/'
  },
  {
    title: 'X Clone Landing Page',
    tech: 'Tailwind',
    category: 'html&css',
    image: 'assets/x-clone.png',
    alt: 'X Clone Landing Page',
    tooltip: 'X Clone Landing Page',
    demoLink: ''
  },
  {
    title: 'Homyz Landing Page',
    tech: 'Bootstrap',
    category: 'html&css',
    image: 'assets/homyz.png',
    alt: 'Homyz Landing Page',
    tooltip: 'Homyz Landing Page',
    demoLink: 'https://muhammad-1956.github.io/Homyz/homyz.html#'
  },
  {
    title: 'Social Proof Section',
    tech: 'SASS',
    category: 'html&css',
    image: 'assets/state-cmp.png',
    alt: 'Homyz Landing Page',
    tooltip: 'Homyz Landing Page',
    demoLink: 'https://muhammad-1956.github.io/Homyz/homyz.html#'
  },
  {
    title: 'State Preview Card Component',
    tech: 'SASS',
    category: 'html&css',
    image: 'assets/review-cmp.png',
    alt: 'Homyz Landing Page',
    tooltip: 'Homyz Landing Page',
    demoLink: 'https://muhammad-1956.github.io/Homyz/homyz.html#'
  },
  {
    title: 'To Do APP',
    tech: 'JAVASCRIPT',
    category: 'javascript',
    image: 'assets/todo.png',
    alt: 'To Do APP',
    tooltip: 'To Do APP',
    demoLink: 'https://muhammad-1956.github.io/ToDoList/toDoList.html'
  },
]);

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
