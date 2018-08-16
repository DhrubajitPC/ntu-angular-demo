import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLikeComponent } from './angular-like.component';

describe('AngularLikeComponent', () => {
  let component: AngularLikeComponent;
  let fixture: ComponentFixture<AngularLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
