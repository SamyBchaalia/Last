import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishchildComponent } from './dishchild.component';

describe('DishchildComponent', () => {
  let component: DishchildComponent;
  let fixture: ComponentFixture<DishchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
