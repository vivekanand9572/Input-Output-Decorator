import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() data: string = '';
  @Input() data2: string = '';
  @Input() data3: string = '';
  @Output() sendMsg = new EventEmitter<any>();

  @ViewChild('myInput1', { static: true }) myInput1!: ElementRef;
  @ViewChild('myInput2', { static: true }) myInput2!: ElementRef;
  @ViewChild('myInput3', { static: true }) myInput3!: ElementRef;

  user: any = {
    id: 0, 
    name: '',
    phone: '',
    email: ''
  };

  

  ngOnInit() {
    this.user = {
      id: 1, 
      name: '',
      phone: '',
      email: ''
    };
  }

  handle(input1: HTMLInputElement, input2: HTMLInputElement, input3: HTMLInputElement) {
    const message = {
      name: input1.value,
      phone: input2.value,
      email: input3.value
    };

    this.sendMsg.emit(message);

    input1.value = '';
    input2.value = '';
    input3.value = '';
  }
}

