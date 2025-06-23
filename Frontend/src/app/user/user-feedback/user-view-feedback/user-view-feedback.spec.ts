import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewFeedback } from './user-view-feedback';

describe('UserViewFeedback', () => {
  let component: UserViewFeedback;
  let fixture: ComponentFixture<UserViewFeedback>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserViewFeedback]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserViewFeedback);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
