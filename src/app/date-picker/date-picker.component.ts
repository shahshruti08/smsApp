import { Component, OnInit, Input } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.less'],
  
})
export class DatePickerComponent implements OnInit {

  constructor() { }
  @Input() label: string;
  @Input() ID: string;
  @Input() addEvent:any;
  ngOnInit(): void {
  }
  events: string[] = [];
  error: string;
 /* addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    if(event.value === null) {
      this.error = 'Please enter correct Date';
    }
    this.events.push(`${type}: ${event.value}`);
  }
  addChange(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
    if(event.value === null) {
      this.error = 'Please enter correct Date';
    }
  }*/
}
