import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() class: string              = "btn btn-primary m-2"
  @Input() text: string               = "Search"
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  handleButtonClick() {
    this.buttonClick.emit();
  }

}
