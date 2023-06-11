import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pc-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  constructor() { }

  @Input()
  src:string = ""

  @Input()
  alt:string=""

  @Input()
  class:string="img-fluid"


  ngOnInit() {
  }

}
