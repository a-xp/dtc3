import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TaskProvisionComponent} from './task-provision.component';

describe('TaskProvisionComponent', () => {
  let component: TaskProvisionComponent;
  let fixture: ComponentFixture<TaskProvisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskProvisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskProvisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
