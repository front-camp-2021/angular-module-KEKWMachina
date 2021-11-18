import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentNavComponent } from './main-content-nav.component';

describe('MainContentNavComponent', () => {
  let component: MainContentNavComponent;
  let fixture: ComponentFixture<MainContentNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainContentNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
