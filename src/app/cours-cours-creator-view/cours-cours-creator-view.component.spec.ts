import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursCoursCreatorViewComponent } from './cours-cours-creator-view.component';

describe('CoursCoursCreatorViewComponent', () => {
  let component: CoursCoursCreatorViewComponent;
  let fixture: ComponentFixture<CoursCoursCreatorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursCoursCreatorViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursCoursCreatorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
