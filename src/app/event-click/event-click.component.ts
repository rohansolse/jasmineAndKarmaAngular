import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-click',
  templateUrl: './event-click.component.html',
  styleUrls: ['./event-click.component.css']
})
export class EventClickComponent implements OnInit {
  count: number = 0
  constructor() { }

  ngOnInit(): void {
  }
  removeClick() {
    this.count -= 1
  }
  addClick() {
    this.count += 1
  }
}
