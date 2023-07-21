import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshFinanceComponent } from './fresh-finance.component';

describe('FreshFinanceComponent', () => {
  let component: FreshFinanceComponent;
  let fixture: ComponentFixture<FreshFinanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreshFinanceComponent]
    });
    fixture = TestBed.createComponent(FreshFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
