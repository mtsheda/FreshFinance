import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPartComponent } from './top-part.component';

describe('TopPartComponent', () => {
  let component: TopPartComponent;
  let fixture: ComponentFixture<TopPartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopPartComponent]
    });
    fixture = TestBed.createComponent(TopPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
