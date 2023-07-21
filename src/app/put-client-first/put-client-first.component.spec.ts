import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutClientFirstComponent } from './put-client-first.component';

describe('PutClientFirstComponent', () => {
  let component: PutClientFirstComponent;
  let fixture: ComponentFixture<PutClientFirstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PutClientFirstComponent]
    });
    fixture = TestBed.createComponent(PutClientFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
