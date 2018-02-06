import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TaskDeployComponent} from './task-deploy.component';

describe('TaskDeployComponent', () => {
  let component: TaskDeployComponent;
  let fixture: ComponentFixture<TaskDeployComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskDeployComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDeployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
