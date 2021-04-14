import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingRolesComponent } from './landing-roles.component';

describe('LandingRolesComponent', () => {
  let component: LandingRolesComponent;
  let fixture: ComponentFixture<LandingRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingRolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
