import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBussinessComponent } from './about-bussiness.component';

describe('AboutBussinessComponent', () => {
  let component: AboutBussinessComponent;
  let fixture: ComponentFixture<AboutBussinessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutBussinessComponent]
    });
    fixture = TestBed.createComponent(AboutBussinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
