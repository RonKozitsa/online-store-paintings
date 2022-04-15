import { Component, ChangeDetectionStrategy, Self, Optional, Input } from '@angular/core';
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

  constructor(@Self() @Optional() private ngControl: NgControl) {
    super();
    // tslint:disable-next-line:no-unused-expression
    this.ngControl && (this.ngControl.valueAccessor = this);
  }

  get showError(): boolean {
    if (!this.ngControl) {
      return false;
    }

    return this.ngControl.dirty && this.ngControl.invalid;
  }
}
