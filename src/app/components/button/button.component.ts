import { Component, Input } from '@angular/core';
import { ButtonModel } from '../../models/button.model';
import { AccessibilityService } from '../../services/accessibility.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() button: ButtonModel;

  constructor(private accessibilityService: AccessibilityService) {}

  onClick() {
    this.accessibilityService.handleClick(this.button);
  }
}