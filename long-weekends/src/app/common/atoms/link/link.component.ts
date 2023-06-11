import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pc-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  hRef:string="";

  @Input()
  linkHref:string="";

  @Input()

  linkTitle:string="";

  @Input()
  class:string="btn btn-warning btn-lg text-white m-1 "

  @Input()
  linkText:string="";

}
