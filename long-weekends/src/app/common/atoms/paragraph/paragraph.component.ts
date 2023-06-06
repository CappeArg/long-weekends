import { Component, Input } from '@angular/core';

@Component({
  selector: 'pc-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent {

  constructor() { }

  @Input()
  pText: string = 'Text';

  @Input()
  class:string = 'lead mb-4';



}
