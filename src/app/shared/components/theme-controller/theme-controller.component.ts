import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ButtonType } from '../app-button/app-button.interface';
import { ThemeService } from '../../services/theme.service';
import { ThemeType } from './theme-controller.interface';

@Component({
  selector: 'app-theme-controller',
  templateUrl: './theme-controller.component.html',
  styleUrls: ['./theme-controller.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeControllerComponent {
  readonly buttonType = ButtonType.icon;
  readonly ThemeType = ThemeType;

  constructor(public themeService: ThemeService) {}
}
