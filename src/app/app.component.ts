import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Input-Output';
  parentName: string = '';
  parentPhone: string = '';
  parentEmail: string = '';
  selectedVariable: number = -1; 
  ngOnInit(){
   
  }
  rowData: { name: string, phone: string, email: string }[] =  [
    { name: 'John Doe', phone: '123-456-7890', email: 'johndoe@example.com' },
    { name: 'Vivek Singh', phone: '9324129480', email: 'viveksingh@example.com' },
    { name: 'Ankit Kumar', phone: '1234567895', email: 'ankitkumar@example.com' },
    { name: 'Ayshman', phone: '747377473737',   email:   'ayushman@example.com' },
    { name: 'abc', phone: '123848789848845',         email: 'abc@example.com' },
    { name: 'def Kumar', phone: '125353895', email: 'def@example.com' },
    { name: 'ghi', phone: '8938983983929', email: 'ghi@example.com' },
    { name: 'jkl Kumar', phone: '1234568383833', email: 'jkl@example.com' },
    { name: 'Mno', phone: '12377395', email: 'Mno@example.com' },
    { name: 'priyanshu humar', phone: '18373773383', email: 'Priyanshukumar@example.com' }
  ];
  namee: any;
  phonee: any;
  emaile: any;

  handleClick(value1: string, value2: string, value3: string, index: number) {
    this.parentName = value1;
    this.parentPhone = value2;
    this.parentEmail = value3;
    this.selectedVariable = index; 
  }

  hii(data: any) {
    this.rowData[this.selectedVariable].name=data.name;
    this.rowData[this.selectedVariable].phone= data.phone;
    this.rowData[this.selectedVariable].email= data.email;
    console.log(this.namee)
  }
}
