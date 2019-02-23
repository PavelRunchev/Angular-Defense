import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPostedGamesComponent } from './all-posted-games.component';

describe('AllPostedGamesComponent', () => {
  let component: AllPostedGamesComponent;
  let fixture: ComponentFixture<AllPostedGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPostedGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPostedGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
