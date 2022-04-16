import { Component, ChangeDetectionStrategy, Self, Input } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

import { ValueAccessor } from '../../classes/value-accessor';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextComponent extends ValueAccessor implements ControlValueAccessor {
  @Input() label: string;

  constructor(@Self() private ngControl: NgControl) {
    super();
    this.ngControl.valueAccessor = this;
  }

  get showError(): boolean {
    if (!this.ngControl) {
      return false;
    }

    return this.ngControl.dirty && this.ngControl.invalid;
  }
}
