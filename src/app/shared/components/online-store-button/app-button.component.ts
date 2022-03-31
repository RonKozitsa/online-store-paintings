import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {ButtonType} from './app-button.interface';

@Component({
    selector: 'app-button',
    templateUrl: './app-button.component.html',
    styleUrls: ['./app-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppButtonComponent implements OnInit {
    @Input() type = ButtonType.standard;
    @Input() customClass = '';

    @Output() clicked = new EventEmitter<void>();

    constructor() {
    }

    ngOnInit(): void {
    }

}
