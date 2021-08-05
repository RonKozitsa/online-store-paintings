import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-store-item-image',
  templateUrl: './store-item-image.component.html',
  styleUrls: ['./store-item-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoreItemImageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
