import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareTechnologyComponent } from './software-technology.component';

describe('SoftwareTechnologyComponent', () => {
  let component: SoftwareTechnologyComponent;
  let fixture: ComponentFixture<SoftwareTechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareTechnologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
