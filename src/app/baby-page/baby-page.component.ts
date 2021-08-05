import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-baby-page',
  templateUrl: './baby-page.component.html',
  styleUrls: ['./baby-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BabyPageComponent implements OnInit {

  gridItems = ['1', '2', '3', '5', '6', '7', '8', '9', '10'];

  constructor() {
  }

  ngOnInit() {
  }

}
