import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showTooltip: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleTooltip() {
    this.showTooltip = !this.showTooltip;
  }

}
