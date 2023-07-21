import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottmButtonsComponent } from './bottm-buttons.component';

describe('BottmButtonsComponent', () => {
  let component: BottmButtonsComponent;
  let fixture: ComponentFixture<BottmButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottmButtonsComponent]
    });
    fixture = TestBed.createComponent(BottmButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
