import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-optimized-image',
  templateUrl: './optimized-image.component.html',
  styleUrls: ['./optimized-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptimizedImageComponent {
  @Input() path: string;
  @Input() alt: string;
  @Input() height: string;
  @Input() width: string;
  @Input() isPriority: boolean;
  @Input() ariaHidden: boolean;
  @Input() fillImage = true;
}
