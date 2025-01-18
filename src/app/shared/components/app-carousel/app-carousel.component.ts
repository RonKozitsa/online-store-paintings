import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { StoreItemImageComponent } from '../store-item-image/store-item-image.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './app-carousel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgbCarousel, StoreItemImageComponent],
  standalone: true
})
export class AppCarouselComponent {
  @Input() frameColor: string;
  @Input() imagesName: string;
  @Input() isViewExpandedMode: boolean;
  @Input() carouselImagesPath: string[];

  @Output() pictureClicked = new EventEmitter<null>();

  pauseOnHover = true;
  pauseOnFocus = true;
  interval = 5000;

  isPreviewImage(imgName: string): boolean {
    return imgName.includes('preview');
  }
}
