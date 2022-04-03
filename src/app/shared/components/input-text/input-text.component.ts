import {Component, ChangeDetectionStrategy} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';

@Component({
    selector: 'app-input-text',
    templateUrl: './input-text.component.html',
    styleUrls: ['./input-text.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextComponent implements ControlValueAccessor {
    text: string;

    onChange = () => {
    };
    onTouched = () => {
    };

    constructor() {
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    writeValue(text: string): void {
        this.text = text;
    }

}
