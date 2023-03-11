import { animate, style, transition } from '@angular/animations';

export const animations = {
  fadeInOut: [
    transition(':enter', [
      style({
        opacity: 0,
        'z-index': 999
      }),
      animate('200ms', style({ opacity: 1 }))
    ]),
    transition(':leave', [animate('200ms', style({ opacity: 0 }))])
  ],
  slideInOut: [
    transition(':enter', [
      style({
        opacity: 0,
        'z-index': 999,
        transform: 'translateX(-100%)'
      }),
      animate('250ms', style({ transform: 'translateX(0%)', opacity: 1 }))
    ]),
    transition(':leave', [
      style({
        opacity: 1,
        'z-index': 999,
        transform: 'translateX(0%)'
      }),
      animate(
        '250ms',
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        })
      )
    ])
  ]
};
