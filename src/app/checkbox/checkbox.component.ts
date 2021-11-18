import { Component, OnInit, Input } from '@angular/core';
import { FiltersService } from '../services/filters/filters.service';
import { PagesService } from '../services/page/pages.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
  @Input() item = '';
  @Input() section = '';

  constructor(
    private pagesService: PagesService,
    private filtersService: FiltersService
  ) {}

  setFilters(checkbox: any) {
    this.pagesService.setPage('1');
    this.filtersService.setFilters(checkbox.firstElementChild, this.section);
  }

  ngOnInit(): void {}
}
