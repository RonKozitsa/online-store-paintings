import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, HostBinding } from '@angular/core';

import { ButtonType } from './app-button.interface';
import { BreakpointObserverService } from '../../services/breakpoint-observer.service';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppButtonComponent {
  @HostBinding('attr.tabindex') tabIndex = -1;

  @Input() buttonType = ButtonType.standard;
  @Input() disabled: boolean;
  @Input() ariaExpanded: boolean;
  @Input() label: string;
  @Input() customClass = '';
  @Input() infoTooltip = '';

  @Output() clicked = new EventEmitter<Event>();

  constructor(public breakpointObserverService: BreakpointObserverService) {}
}
