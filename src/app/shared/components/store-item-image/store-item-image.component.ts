import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'app-store-item-image',
  templateUrl: './store-item-image.component.html',
  styleUrls: ['./store-item-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoreItemImageComponent implements OnInit {
  @Input() imgName: string;
  constructor() { }

  ngOnInit() {
  }

}
