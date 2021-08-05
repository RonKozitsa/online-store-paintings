import {animate, style, transition} from '@angular/animations';

export const animations = {
  fadeInOut: [
    transition(':enter', [
      style({opacity: 0}),
      animate('200ms', style({opacity: 1})),
    ]),
    transition(':leave', [
      animate('200ms', style({opacity: 0})),
    ]),
  ],
  fadeIn: [
    transition(':enter', [
      style({opacity: 0}),
      animate('200ms', style({opacity: 1})),
    ])
  ],
  fadeOut: [
    transition(':leave', [
      style({opacity: 1}),
      animate('200ms', style({opacity: 0})),
    ])
  ],
};
