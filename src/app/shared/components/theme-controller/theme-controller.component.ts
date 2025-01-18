import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ButtonType } from '../app-button/app-button.interface';
import { ThemeService } from '../../services/theme.service';
import { ThemeType } from './theme-controller.interface';
import {AppButtonComponent} from '../app-button/app-button.component';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-theme-controller',
  templateUrl: './theme-controller.component.html',
  styleUrls: ['./theme-controller.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AppButtonComponent,
    AsyncPipe
  ],
  standalone: true
})
export class ThemeControllerComponent {
  readonly buttonType = ButtonType.icon;
  readonly ThemeType = ThemeType;

  constructor(public themeService: ThemeService) {}
}
