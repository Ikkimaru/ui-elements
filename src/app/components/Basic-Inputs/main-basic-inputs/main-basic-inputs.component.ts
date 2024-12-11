import { Component } from '@angular/core';
import {ButtonsComponent} from '../buttons/buttons.component';
import {TextInputsComponent} from '../text-inputs/text-inputs.component';

@Component({
  selector: 'app-main-basic-inputs',
  imports: [
    ButtonsComponent,
    TextInputsComponent
  ],
  templateUrl: './main-basic-inputs.component.html',
  styleUrl: './main-basic-inputs.component.css'
})
export class MainBasicInputsComponent {

}
