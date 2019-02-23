import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPostedGameComponent } from './edit-posted-game.component';

describe('EditPostedGameComponent', () => {
  let component: EditPostedGameComponent;
  let fixture: ComponentFixture<EditPostedGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPostedGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPostedGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
