import {Component, ChangeDetectionStrategy, Self, OnInit} from '@angular/core';
import { NgControl, Validators } from '@angular/forms';

import { ValueAccessor } from '../../classes/value-accessor';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextComponent extends ValueAccessor implements OnInit {
  readonly Validators = Validators;
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
