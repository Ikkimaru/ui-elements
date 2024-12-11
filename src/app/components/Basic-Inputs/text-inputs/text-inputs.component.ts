import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {Clipboard} from '@angular/cdk/clipboard';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-text-inputs',
  imports: [
    NgForOf,
    NgClass,
    NgIf
  ],
  templateUrl: './text-inputs.component.html',
  styleUrl: './text-inputs.component.css'
})
export class TextInputsComponent {
  constructor(private clipboard: Clipboard, private snackBar: MatSnackBar) {}

  inputs = [
    {
      label: 'Single-line Text Field',
      type: 'text',
      className: 'single-line',
      placeholder: 'Enter text...',
      description: 'A simple single-line input for plain text.',
      css: `
.input.single-line {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}
.input.single-line:focus {
  border-color: #007bff;
  outline: none;
}`
    },
    {
      label: 'Multi-line Text Field',
      type: 'textarea',
      className: 'multi-line',
      placeholder: 'Enter your text here...',
      description: 'A text area for multi-line input.',
      css: `
.textarea.multi-line {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  height: 100px;
  resize: vertical;
}
.textarea.multi-line:focus {
  border-color: #673ab7;
  outline: none;
}`
    },
    {
      label: 'Password Field',
      type: 'password',
      className: 'password',
      placeholder: 'Enter password...',
      description: 'A secure input for passwords.',
      css: `
.input.password {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}
.input.password:focus {
  border-color: #28a745;
  outline: none;
}`
    },
    {
      label: 'Search Box',
      type: 'search',
      className: 'search',
      placeholder: 'Search...',
      description: 'An input for search queries.',
      css: `
.input.search {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 20px;
  width: 100%;
}
.input.search:focus {
  border-color: #ff9800;
  outline: none;
}`
    },
    {
      label: 'Email Input',
      type: 'email',
      className: 'email',
      placeholder: 'Enter email...',
      description: 'An input field for email addresses.',
      css: `
.input.email {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}
.input.email:focus {
  border-color: #17a2b8;
  outline: none;
}`
    }
  ];

  copyCss(css: string, label: string): void {
    this.clipboard.copy(css);
    this.snackBar.open(label + ' CSS copied to clipboard!', undefined, {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['custom-snackbar'],
    });
  }
}
