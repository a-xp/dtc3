import {Component, OnInit} from '@angular/core';


export enum ProjectType { service = 1, cron = 2 }

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  type = ProjectType.service;

  success = false;

  constructor() { }

  ngOnInit() {
  }

  setType() {

  }
}
