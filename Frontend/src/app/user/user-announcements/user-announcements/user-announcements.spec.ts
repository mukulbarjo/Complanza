import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAnnouncements } from './user-announcements';

describe('UserAnnouncements', () => {
  let component: UserAnnouncements;
  let fixture: ComponentFixture<UserAnnouncements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAnnouncements]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAnnouncements);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
