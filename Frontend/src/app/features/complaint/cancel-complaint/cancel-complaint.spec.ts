import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelComplaint } from './cancel-complaint';

describe('CancelComplaint', () => {
  let component: CancelComplaint;
  let fixture: ComponentFixture<CancelComplaint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancelComplaint]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelComplaint);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
