import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursStudentViewComponent } from './cours-student-view.component';

describe('CoursStudentViewComponent', () => {
  let component: CoursStudentViewComponent;
  let fixture: ComponentFixture<CoursStudentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursStudentViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursStudentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
