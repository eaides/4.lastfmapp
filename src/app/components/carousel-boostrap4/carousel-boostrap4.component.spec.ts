import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselBoostrap4Component } from './carousel-boostrap4.component';

describe('CarouselBoostrap4Component', () => {
  let component: CarouselBoostrap4Component;
  let fixture: ComponentFixture<CarouselBoostrap4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselBoostrap4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselBoostrap4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
