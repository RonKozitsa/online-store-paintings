import { Component, ChangeDetectionStrategy, Self, OnInit, Input } from '@angular/core';
import { FormsModule, NgControl, Validators } from '@angular/forms';

import { ValueAccessor } from '../../classes/value-accessor';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FormsModule, NgIf]
})
export class InputTextComponent extends ValueAccessor implements OnInit {
  @Input() errorMessage = 'Please enter a valid value';

  isControlRequired: boolean;

  constructor(@Self() public ngControl: NgControl) {
    super();
    this.ngControl.valueAccessor = this;
  }

  ngOnInit() {
    this.isControlRequired = this.ngControl?.control?.hasValidator(Validators.required);
  }

  get showError(): boolean {
    return this.ngControl?.dirty && this.ngControl?.invalid;
  }
}
