import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'pc-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() items: any[] = [];
  @Input() firstOption: string = '';
  @Output() selectedEmitter = new EventEmitter<string>();
  @Input() valueProperty: string = 'itemValue';
  @Input() nameProperty: string = 'itemName';


  constructor() { }

  ngOnInit() {
  }

  onSelectionChange(value: string) {
    this.selectedEmitter.emit(value);
  }
}
