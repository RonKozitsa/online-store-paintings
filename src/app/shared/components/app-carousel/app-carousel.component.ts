import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './app-carousel.component.html',
  styleUrls: ['./app-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class AppCarouselComponent {
  @Input() frameColor: string;
  @Input() carouselImages: string[];

  pauseOnHover = true;
  pauseOnFocus = true;
  interval = 5000;

  isPreviewImage(imgName: string): boolean {
    return imgName.includes('preview');
  }
}
