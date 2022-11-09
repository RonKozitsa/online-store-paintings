import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

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
}
