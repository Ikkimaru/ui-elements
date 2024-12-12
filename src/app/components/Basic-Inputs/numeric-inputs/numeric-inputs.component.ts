import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-numeric-inputs',
  imports: [NgForOf, NgClass, NgIf],
  templateUrl: './numeric-inputs.component.html',
  styleUrl: './numeric-inputs.component.css'
})
export class NumericInputsComponent {
  constructor(private clipboard: Clipboard, private snackBar: MatSnackBar) {}

  numericInputs = [
    {
      label: 'Spinner Controls',
      type: 'number',
      className: 'spinner',
      placeholder: '',
      description: 'A numeric input with spinner controls for incrementing and decrementing values.',
      css: `
    .input.spinner {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      width: 100%;
    }
    .input.spinner:focus {
      border-color: #007bff;
      outline: none;
    }`
    },
    {
      label: 'Sliders (Range Inputs)',
      type: 'range',
      className: 'slider',
      placeholder: '',
      description: 'A range input for selecting values within a predefined range.',
      css: `
    .input.slider {
      width: 100%;
    }
    .input.slider:focus {
      outline: none;
    }`
    },
    {
      label: 'Visual Numpad',
      type: 'text',
      className: 'numpad',
      placeholder: 'Enter numbers...',
      description: 'A visual numpad for entering numeric values.',
      css: `
.numpad-keys {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  gap: 10px; /* Space between keys */
  max-width: 200px; /* Adjust width as needed */
  margin-top: 10px;
}
.numpad-key {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  height: 50px;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s ease;
}
.numpad-key:hover {
  background-color: #dcdcdc;
}
.numpad-key:active {
  background-color: #c0c0c0;
}
.numpad-key:nth-child(10) {
  grid-column: span 2; /* Make the "0" key wider */
}
.numpad-key:last-child {
  background-color: #ff6666;
  color: white;
  grid-column: span 1;
  font-size: 16px;
}
`
    }




  ];

  onNumpadKeyPress(input: any, key: string): void {
    if (key === 'DEL') {
      input.value = input.value.slice(0, -1); // Delete the last character
    } else {
      input.value = (input.value || '') + key; // Append the clicked key
    }
  }



  copyCss(css: string, label: string): void {
    this.clipboard.copy(css);
    this.snackBar.open(label + ' CSS copied to clipboard!', undefined, {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['custom-snackbar']
    });
  }
}

