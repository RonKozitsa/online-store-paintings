import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'app-store-item-description',
  templateUrl: './store-item-description.component.html',
  styleUrls: ['./store-item-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoreItemDescriptionComponent implements OnInit {

  @Input() description: string;

  constructor() {
  }

  ngOnInit() {
  }

}
