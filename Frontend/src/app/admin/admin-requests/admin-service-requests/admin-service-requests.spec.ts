import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminServiceRequests } from './admin-service-requests';

describe('AdminServiceRequests', () => {
  let component: AdminServiceRequests;
  let fixture: ComponentFixture<AdminServiceRequests>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminServiceRequests]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminServiceRequests);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
