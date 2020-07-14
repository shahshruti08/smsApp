import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactService } from '../contact.service';

import { MatDialog } from '@angular/material/dialog';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

declare var $: any;

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.less']
})
export class ListContactComponent implements OnInit {
  
  @ViewChild('agGrid') agGrid: AgGridAngular;

  
  startDate: string;
  endDate: string;
  startDateId: string;
  endDateId: string;
  gridOptions: any;
  columnDefs: any;
  rowData: any;
 first:any ;
 last:any;
  self = this;
  //updateDetails: any;
  constructor(
    private contactService: ContactService,
    private router: Router,
    public dialog: MatDialog
  ) {

  }

 
  
  addEventStartDate = function(type: string, event: MatDatepickerInputEvent<Date>) {
    if(event.value === null) {
      //this.error = 'Please enter correct Date';
    }else {
     // self.first = event.value;
      
    }
   // this.events.push(`${type}: ${event.value}`);
  }
  addEventEndDate = function(type: string, event: MatDatepickerInputEvent<Date>) {
    if(event.value === null) {
      //this.error = 'Please enter correct Date';
    }else {
     // self.last = event.value;
      
    }
   // this.events.push(`${type}: ${event.value}`);
  }
   dateCombined() {
  //    if(self.first && self.last) {
  //   var dateFilterComponent = this.gridOptions.api.getFilterInstance('start_date');
  //   dateFilterComponent.setModel({
      
  //       type: 'greaterThan',
  //       dateFrom: new Date(self.first).getFullYear()+'-'+ new Date(self.first).getMonth()+'-'+ new Date(self.first).getDate(),
  //       dateTo: null,
      
  //   });
  //   dateFilterComponent.applyModel();
  //   var dateFilterComponent1 = this.gridOptions.api.getFilterInstance('end_date');
  //   dateFilterComponent1.setModel({
      
     
  //       type: 'lessThan',
  //       dateFrom: new Date(self.last).getFullYear()+'-'+ new Date(self.last).getMonth()+'-'+ new Date(self.last).getDate(),
  //       dateTo: null
     
  //   });
  //   dateFilterComponent1.applyModel();
  //   /*
  //   var hardcodedFilter = {
  //     start_date: {
  //       type: 'greaterThan',
  //       dateFrom: new Date(self.first).getFullYear()+'-'+ new Date(self.first).getMonth()+'-'+ new Date(self.first).getDate(),
  //     },
  
  //     end_date: { type: 'lessThan', dateFrom: new Date(self.last).getFullYear()+'-'+ new Date(self.last).getMonth()+'-'+ new Date(self.last).getDate(), },
  //   };
  //   this.gridOptions.api.setFilterModel(hardcodedFilter);*/
  //   this.gridOptions.api.onFilterChanged();
  // }
  }
  
  updateDetails = function (params: any) {
    console.log(params);
    var x = this.contactService.addToContactList(params);
  }
  deleteEvent = function (param) {
    console.log(param);
    this.contactService.deleteContact(param._id).subscribe(
      response => {
        console.log(response);
        this.openDialog('Successfull', 'Contact Successfully deleted.');
      },
      error => {
        console.log(error);
      });;
  }
  openDialog(ttl, msg): void {
    const dialogRef = this.dialog.open(DialogComponentComponent, {
      width: '250px',
      data: { title: ttl, message: msg }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.rowData = this.contactService.getContacts();
      this.gridOptions.api.refreshCells();
    });
  }
  ngOnInit() {
    this.rowData = this.contactService.getContacts();
    this.startDate = 'Start Date';
    this.endDate = 'End Date';
    this.startDateId = 'startDate';
    this.endDateId = 'endDate';

    this.columnDefs = [
      {
        headerName: 'City',
        field: 'city',
        sortable: true,
        sortingOrder: ['asc', 'desc'],
        editable: true,

      },
      {
        headerName: 'Start Date',
        field: 'start_date',
        
        editable: true,
        cellRenderer: function (param) {
          return new Date(param.value).getMonth() + 1 + '/' + new Date(param.value).getDate() + '/' + new Date(param.value).getFullYear();
        },
        cellEditor: 'datePicker',
        sortable: true,
        
      },
      {
        headerName: 'End Date', field: 'end_date',
        
        cellRenderer: function (param) {
          return new Date(param.value).getMonth() + 1 + '/' + new Date(param.value).getDate() + '/' + new Date(param.value).getFullYear();
        },
        cellEditor: 'datePicker',
        editable: true,
        sortable: true,

      },
      {

        headerName: 'Price',
        field: 'price',
        sortable: true,
        editable: true,

      },
      {
        headerName: 'Status',
        field: 'status',
        editable: true,
        width: 80,
        sortable: true
      },

      {
        headerName: 'Color',
        field: 'color',
        editable: false,
        sortable: true,
        width: 100,
        cellRenderer: function (param) {
          return '<div class="box" style="background-color:' + param.value + '">' + param.value + '</div>'
        }
      },
      {
        headerName: 'Delete',
        field: '',
        editable: false,
        cellRenderer: 'myCellRenderer'
      }
    ];
    let self = this;
    this.gridOptions = {
      columnDefs: this.columnDefs,
      rowData: this.rowData,
      singleClickEdit: true,
      editType: 'fullRow',
      filter: true,
      onGridReady(param) {
        this.gridApi = param.api;
      },
      onRowEditingStarted: function (event) {
        console.log('never called - not doing row editing');
      },
      onRowEditingStopped: function (event) {
        self.updateDetails(event.data);
        console.log('never called - not doing row editing');
        // this.updateDetails(event.data);

      },
      onCellEditingStarted: function (param) {
        rowIndex: 1
      },
      components: {
        'myCellRenderer': MyCellRenderer,
        datePicker: getDatePicker(),
      }

    };
    function getDatePicker() {
      function Datepicker() {}
      Datepicker.prototype.init = function(params) {
        this.eInput = document.createElement('input');
        this.eInput.value = params.value;
        this.eInput.classList.add('ag-input');
        this.eInput.style.height = '100%';
        $(this.eInput).datepicker();
      };
      Datepicker.prototype.getGui = function() {
        return this.eInput;
      };
      Datepicker.prototype.afterGuiAttached = function() {
        this.eInput.focus();
        this.eInput.select();
      };
      Datepicker.prototype.getValue = function() {
        return this.eInput.value;
      };
      Datepicker.prototype.destroy = function() {};
      Datepicker.prototype.isPopup = function() {
        return false;
      };
      return Datepicker;
    }
    
    
    function MyCellRenderer() { }

    // gets called once before the renderer is used
    MyCellRenderer.prototype.init = function (params) {
      // create the cell
      var data = params.node.data;
      this.eGui = document.createElement('div');
      this.eGui.innerHTML = '<span class="my-css-class"><button class="btn-simple">Delete</button>';

      // get references to the elements we want
      this.eButton = this.eGui.querySelector('.btn-simple');


      // add event listener to button
      this.eventListener = function () {
        console.log('button was clicked!!');
        self.deleteEvent(data);

      };
      this.eButton.addEventListener('click', this.eventListener);
    };


    // gets called once (assuming destroy hasn't been called first) when grid ready to insert the element
    MyCellRenderer.prototype.getGui = function () {
      return this.eGui;
    };

  }

 



}
