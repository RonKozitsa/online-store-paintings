import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-children-page',
  templateUrl: './children-page.component.html',
  styleUrls: ['./children-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildrenPageComponent implements OnInit {

  gridItems = ['1', '2', '3', '5', '6', '7', '8', '9', '10'];

  constructor() {
  }

  ngOnInit() {
  }

}
