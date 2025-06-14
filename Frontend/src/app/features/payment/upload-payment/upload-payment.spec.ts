import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPayment } from './upload-payment';

describe('UploadPayment', () => {
  let component: UploadPayment;
  let fixture: ComponentFixture<UploadPayment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadPayment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadPayment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
