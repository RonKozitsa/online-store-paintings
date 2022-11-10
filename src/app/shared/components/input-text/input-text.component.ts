import {Component, ChangeDetectionStrategy, Self} from '@angular/core';
import {NgControl, Validators} from '@angular/forms';

import { ValueAccessor } from '../../classes/value-accessor';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextComponent extends ValueAccessor  {
  readonly Validators = Validators;

  constructor(@Self() public ngControl: NgControl) {
    super();
    this.ngControl.valueAccessor = this;
  }

  get showError(): boolean {
    return this.ngControl?.dirty && this.ngControl?.invalid;
  }
}
