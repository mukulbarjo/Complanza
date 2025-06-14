import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComplaint } from './view-complaint';

describe('ViewComplaint', () => {
  let component: ViewComplaint;
  let fixture: ComponentFixture<ViewComplaint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewComplaint]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewComplaint);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
