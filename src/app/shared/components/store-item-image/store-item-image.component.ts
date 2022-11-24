import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-store-item-image',
  templateUrl: './store-item-image.component.html',
  styleUrls: ['./store-item-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoreItemImageComponent {
  @Input() imgPath: string;
  @Input() alt: string;
  @Input() frameColor: string;
  @Input() isPriority: boolean;
  @Input() fillImage = true;

  imageLoaded$ = new BehaviorSubject<boolean>(false);
}
