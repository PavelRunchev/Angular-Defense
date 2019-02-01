import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialThanksComponent } from './special-thanks.component';

describe('SpecialThanksComponent', () => {
  let component: SpecialThanksComponent;
  let fixture: ComponentFixture<SpecialThanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialThanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialThanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
