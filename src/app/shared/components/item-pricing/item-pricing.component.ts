import {Component, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'app-item-pricing',
  templateUrl: './item-pricing.component.html',
  styleUrls: ['./item-pricing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemPricingComponent {

  @Input() originalPrice: number;
  @Input() printPrice: number;
}
