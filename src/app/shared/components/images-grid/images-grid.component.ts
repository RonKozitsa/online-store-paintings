import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'app-images-grid',
  templateUrl: './images-grid.component.html',
  styleUrls: ['./images-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImagesGridComponent implements OnInit {

  @Input() gridItems: string[] = [];
  @Input() gridStyle: object;

  constructor() {
  }

  ngOnInit() {
  }

}
