import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAnnouncement } from './post-announcement';

describe('PostAnnouncement', () => {
  let component: PostAnnouncement;
  let fixture: ComponentFixture<PostAnnouncement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostAnnouncement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostAnnouncement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
