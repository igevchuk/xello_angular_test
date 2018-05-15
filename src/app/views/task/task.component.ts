import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  showTooltip: Boolean = false;

  constructor() {}

  ngOnInit() {}

  toggleTooltip() {
    console.log(this.showTooltip);

    this.showTooltip = !this.showTooltip;
  }
}
