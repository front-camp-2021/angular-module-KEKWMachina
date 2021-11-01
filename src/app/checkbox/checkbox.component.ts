import { Component, OnInit, Input } from '@angular/core';
import { FiltersService } from '../services/filters/filters.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() item = '';
  @Input() section = '';

  constructor(
    private filtersService: FiltersService
  ) { }

  setFilters(checkbox: any) {
    this.filtersService.setFilters(checkbox, this.section);
  }

  ngOnInit(): void {
  }

}
