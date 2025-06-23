import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewFeedback } from './admin-view-feedback';

describe('AdminViewFeedback', () => {
  let component: AdminViewFeedback;
  let fixture: ComponentFixture<AdminViewFeedback>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminViewFeedback]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewFeedback);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
