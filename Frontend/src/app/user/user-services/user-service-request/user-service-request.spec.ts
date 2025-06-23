import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserServiceRequest } from './user-service-request';

describe('UserServiceRequest', () => {
  let component: UserServiceRequest;
  let fixture: ComponentFixture<UserServiceRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserServiceRequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserServiceRequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
