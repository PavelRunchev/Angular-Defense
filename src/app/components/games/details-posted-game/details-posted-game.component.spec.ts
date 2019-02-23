import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPostedGameComponent } from './details-posted-game.component';

describe('DetailsPostedGameComponent', () => {
  let component: DetailsPostedGameComponent;
  let fixture: ComponentFixture<DetailsPostedGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPostedGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPostedGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
