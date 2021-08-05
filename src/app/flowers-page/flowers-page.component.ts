import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-flowers-page',
  templateUrl: './flowers-page.component.html',
  styleUrls: ['./flowers-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlowersPageComponent implements OnInit {

  gridItems = ['1', '2', '3', '5', '6', '7', '8', '9', '10'];

  constructor() { }

  ngOnInit() {
  }

}
