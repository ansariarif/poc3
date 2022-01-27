import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortbydojComponent } from './sortbydoj.component';

describe('SortbydojComponent', () => {
  let component: SortbydojComponent;
  let fixture: ComponentFixture<SortbydojComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortbydojComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortbydojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
