import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFeedbackForm } from './user-feedback-form';

describe('UserFeedbackForm', () => {
  let component: UserFeedbackForm;
  let fixture: ComponentFixture<UserFeedbackForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFeedbackForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFeedbackForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
