import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutPageComponent implements OnInit {
  carouselImages: string[] = ['sitting.jpeg', 'painting-in-progress.jpeg'];

  constructor() { }

  ngOnInit() {
  }

}
