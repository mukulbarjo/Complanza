import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpcomingEvents } from './user-upcoming-events';

describe('UserUpcomingEvents', () => {
  let component: UserUpcomingEvents;
  let fixture: ComponentFixture<UserUpcomingEvents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserUpcomingEvents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserUpcomingEvents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
