import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {RouterLink} from '@angular/router';

interface DropdownCategory {
  route: string;
  [key: string]: string[] | string; // Allows the category to have subcategories with string array values
}

interface DropdownData {
  [category: string]: DropdownCategory;
}

@Component({
  selector: 'app-navigation',
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit {

  dropdownData: DropdownData | null = null;

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<DropdownData>('/UI-elements-DONE.json')
      .subscribe((data) => {
        this.dropdownData = data;
      });
  }

  getProcessedValue(subCategoryItems: string | string[] | undefined): string {
    if (!subCategoryItems) {
      return ''; // Return an empty string if the value is null, undefined, or empty
    }
    if (typeof subCategoryItems === 'string') {
      return subCategoryItems; // Return the string directly
    }
    if (Array.isArray(subCategoryItems)) {
      return subCategoryItems.join(', '); // Join the array into a comma-separated string
    }
    return ''; // Fallback in case of unexpected types
  }



  getValidSubCategories(category: string): string[] {
    const categoryData = this.dropdownData?.[category]; // Extract category data

    if (!categoryData) {
      return []; // Return an empty array if dropdownData or category is null/undefined
    }

    return Object.keys(categoryData).filter((subCategory) => {
      const subCategoryData = categoryData[subCategory]; // Extract subCategory data
      return Array.isArray(subCategoryData) && subCategoryData.length > 0;
    });
  }






  // Get object keys
  objectKeys = Object.keys;

  // Check if a category contains any populated subcategories
  hasContent(category: any): boolean {
    return Object.values(category).some((items) => Array.isArray(items) && items.length > 0);
  }

  protected readonly Array = Array;
}
