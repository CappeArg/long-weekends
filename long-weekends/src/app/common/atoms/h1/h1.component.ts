import { Component, Input } from '@angular/core';

@Component({
  selector: 'pc-h1',
  templateUrl: './h1.component.html',
  styleUrls: ['./h1.component.css']
})
export class H1Component{
  
  constructor() { }

  @Input()
  hText: string = 'Text';

  @Input()
  class:string = 'display-4 mb-4';

}


