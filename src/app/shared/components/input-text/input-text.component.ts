import {Component, ChangeDetectionStrategy, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

import {ValueAccessor} from '../../classes/value-accessor';

@Component({
    selector: 'app-input-text',
    templateUrl: './input-text.component.html',
    styleUrls: ['./input-text.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        multi: true,
        useExisting: forwardRef(() => InputTextComponent)
    }]
})
export class InputTextComponent extends ValueAccessor implements ControlValueAccessor {
}
