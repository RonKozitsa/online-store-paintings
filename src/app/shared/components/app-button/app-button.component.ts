import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {ButtonStyle} from './app-button.interface';

@Component({
    selector: 'app-button',
    templateUrl: './app-button.component.html',
    styleUrls: ['./app-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppButtonComponent {
    @Input() buttonStyle = ButtonStyle.standard;
    @Input() disabled: boolean;
    @Input() customClass = '';

    @Output() clicked = new EventEmitter<void>();
}
