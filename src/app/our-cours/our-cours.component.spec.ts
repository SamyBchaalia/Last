import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCoursComponent } from './our-cours.component';

describe('OurCoursComponent', () => {
  let component: OurCoursComponent;
  let fixture: ComponentFixture<OurCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurCoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
