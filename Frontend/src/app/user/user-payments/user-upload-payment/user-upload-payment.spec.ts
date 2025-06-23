import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUploadPayment } from './user-upload-payment';

describe('UserUploadPayment', () => {
  let component: UserUploadPayment;
  let fixture: ComponentFixture<UserUploadPayment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserUploadPayment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserUploadPayment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
