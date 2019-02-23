import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMyGameComponent } from './details-my-game.component';

describe('DetailsMyGameComponent', () => {
  let component: DetailsMyGameComponent;
  let fixture: ComponentFixture<DetailsMyGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsMyGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsMyGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
