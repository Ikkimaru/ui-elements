import { Component } from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';
import {Clipboard} from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [
    NgClass,
    NgForOf
  ],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {
  constructor(private readonly clipboard: Clipboard, private snackBar: MatSnackBar) {}

  buttons = [
    {
      label: 'Primary Button',
      className: 'primary',
      description: 'Use for primary actions, like submitting a form or saving changes.',
      css: `
.btn.primary {
  background-color: #007bff;
  color: white;
}
.btn.primary:hover {
  background-color: #0056b3;
}`
    },
    {
      label: 'Secondary Button',
      className: 'secondary',
      description: 'Use for secondary actions or less prominent tasks.',
      css: `
.btn.secondary {
  background-color: #6c757d;
  color: white;
}
.btn.secondary:hover {
  background-color: #5a6268;
}`
    },
    {
      label: 'Tertiary Button',
      className: 'tertiary',
      description: 'A minimal button style, often used for links or auxiliary actions.',
      css: `
.btn.tertiary {
  background-color: transparent;
  color: #007bff;
}
.btn.tertiary:hover {
  text-decoration: underline;
}`
    },
    {
      label: 'Outlined Button',
      className: 'outlined',
      description: 'Highlights the button with an outline, suitable for less critical actions.',
      css: `
.btn.outlined {
  background-color: transparent;
  color: #007bff;
  border: 2px solid #007bff;
}
.btn.outlined:hover {
  background-color: #007bff;
  color: white;
}`
    },
    {
      label: 'Filled Button',
      className: 'filled',
      description: 'A bold, filled button style for positive actions like "Approve".',
      css: `
.btn.filled {
  background-color: #28a745;
  color: white;
}
.btn.filled:hover {
  background-color: #218838;
}`
    },
    {
      label: 'Ghost Button',
      className: 'ghost',
      description: 'A subtle, minimal button with no background. Useful for non-disruptive actions.',
      css: `
.btn.ghost {
  background-color: transparent;
  color: #6c757d;
}
.btn.ghost:hover {
  background-color: rgba(108, 117, 125, 0.1);
}`
    },
    {
      label: 'Icon Button',
      className: 'icon',
      description: 'A circular button containing an icon, often used for actions like "Favorite".',
      css: `
.btn.icon {
  background-color: transparent;
  border: none;
  color: #007bff;
  padding: 10px;
  border-radius: 50%;
}
.btn.icon:hover {
  background-color: rgba(0, 123, 255, 0.1);
}`
    },{
      label: 'Mouse Down Button',
      className: 'mouse-down-btn',
      description: 'A button that visually shows a "mouse down" effect using CSS.',
      css: `
.mouse-down-btn {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
}

.mouse-down-btn:active {
  background-color: #0056b3;
  transform: scale(0.95);
  box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.2);
}`
    }
  ];

  copyDescription(description: string, button: string): void {
    this.clipboard.copy(description);
    this.snackBar.open(button + ' copied to clipboard!', undefined, {
      duration: 1500, // in milliseconds
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['custom-snackbar'], // Custom CSS class
    });
  }

}
