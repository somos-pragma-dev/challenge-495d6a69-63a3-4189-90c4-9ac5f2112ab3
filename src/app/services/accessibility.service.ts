import { Injectable } from '@angular/core';
import { ButtonModel } from '../models/button.model';

@Injectable({
  providedIn: 'root'
})
export class AccessibilityService {
  handleClick(button: ButtonModel) {
    console.log(`Button clicked: ${button.label}`);
  }
}