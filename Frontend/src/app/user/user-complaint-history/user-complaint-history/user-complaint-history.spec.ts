import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComplaintHistory } from './user-complaint-history';

describe('UserComplaintHistory', () => {
  let component: UserComplaintHistory;
  let fixture: ComponentFixture<UserComplaintHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserComplaintHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComplaintHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
