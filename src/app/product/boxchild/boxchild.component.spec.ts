import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxchildComponent } from './boxchild.component';

describe('BoxchildComponent', () => {
  let component: BoxchildComponent;
  let fixture: ComponentFixture<BoxchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
