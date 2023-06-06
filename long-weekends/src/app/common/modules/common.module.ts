import { NgModule } from '@angular/core';

import { ButtonComponent } from '../atoms/button/button.component';
import { IconComponent } from '../atoms/icon/icon.component';
import { ImageComponent } from '../atoms/image/image.component';
import { InputComponent } from '../atoms/input/input.component';
import { LabelComponent } from '../atoms/label/label.component';
import { H1Component } from '../atoms/h1/h1.component';

@NgModule({
  schemas: [],
  imports: [
  ],
  declarations: [
    ButtonComponent,
    IconComponent,
    ImageComponent,
    InputComponent,
    LabelComponent,
    H1Component
  ]
})
export class CommonModule { }
