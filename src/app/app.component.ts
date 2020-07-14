import { Component, OnInit } from '@angular/core';
import data from '../data.json';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  constructor(
    private contactService: ContactService,
   
  ) {

  }
  ngOnInit(): void {
  
   //This is to insert data first time
   //  this.contactService.contactListInsert(this.jsonData);
  }
  title = 'Sms-Group';
  jsonData: any[]; 
}
