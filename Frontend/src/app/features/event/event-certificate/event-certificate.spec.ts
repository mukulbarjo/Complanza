import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCertificate } from './event-certificate';

describe('EventCertificate', () => {
  let component: EventCertificate;
  let fixture: ComponentFixture<EventCertificate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventCertificate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventCertificate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
