import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackRequest } from './track-request';

describe('TrackRequest', () => {
  let component: TrackRequest;
  let fixture: ComponentFixture<TrackRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackRequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackRequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
