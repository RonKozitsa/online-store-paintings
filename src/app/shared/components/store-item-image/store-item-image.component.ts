import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AsyncPipe, NgClass, NgIf, NgOptimizedImage } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-store-item-image',
  templateUrl: './store-item-image.component.html',
  styleUrls: ['./store-item-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, NgOptimizedImage, NgClass, NgIf, LoaderComponent],
  standalone: true
})
export class StoreItemImageComponent {
  @Input() imgPath: string;
  @Input() alt: string;
  @Input() frameColor: string;
  @Input() priority: boolean;
  @Input() soldOut: boolean;
  @Input() isViewExpandedMode: boolean;

  imageLoaded$ = new BehaviorSubject<boolean>(false);
}
