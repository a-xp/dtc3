import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TaskExecuteComponent} from './task-execute.component';

describe('TaskExecuteComponent', () => {
  let component: TaskExecuteComponent;
  let fixture: ComponentFixture<TaskExecuteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskExecuteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskExecuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
