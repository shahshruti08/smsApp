import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ListContactComponent } from './list-contact/list-contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AgGridModule } from 'ag-grid-angular';
import { DatePickerComponent } from './date-picker/date-picker.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,

    ListContactComponent,
    DialogComponentComponent,
    DatePickerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatTableModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    AgGridModule.withComponents([]),
    MatInputModule,
    RouterModule.forRoot([
      { path: '', component: ListContactComponent },
     
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
