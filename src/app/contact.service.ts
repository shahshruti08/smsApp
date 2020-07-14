import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const baseUrl = 'http://localhost:8080/api/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) { }
    contacts = [];
    addToContactList(contact) {
    
      return this.http.post(baseUrl+'/update', contact).subscribe(function (data) {
        console.log(data);
      });
     // return '200';
    }
  
    getContacts() {
      console.log('in post');
      return this.http.get(baseUrl);
    }
  
   /*  This is to insert data
   contactListInsert(contact) {
    
      return this.http.post(baseUrl+'/create', contact).subscribe(function (data) {
        console.log(data);
      });
     // return '200';
    }*/

    deleteContact(id) {
      return this.http.delete(`${baseUrl}/${id}`);
    }
  }