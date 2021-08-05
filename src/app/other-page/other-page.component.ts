import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-other-page',
  templateUrl: './other-page.component.html',
  styleUrls: ['./other-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OtherPageComponent implements OnInit {

  gridItems = ['1', '2', '3', '5', '6', '7', '8', '9', '10'];

  constructor() {
  }

  ngOnInit() {
  }

}
