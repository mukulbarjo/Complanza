import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSubmitComplaint } from './user-submit-complaint';

describe('UserSubmitComplaint', () => {
  let component: UserSubmitComplaint;
  let fixture: ComponentFixture<UserSubmitComplaint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSubmitComplaint]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSubmitComplaint);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
