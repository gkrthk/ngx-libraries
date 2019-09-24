import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDetectlocationComponent } from './ngx-detectlocation.component';

describe('NgxDetectlocationComponent', () => {
  let component: NgxDetectlocationComponent;
  let fixture: ComponentFixture<NgxDetectlocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDetectlocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDetectlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
