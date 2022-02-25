import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-carousel',
    templateUrl: './app-carousel.component.html',
    styleUrls: ['./app-carousel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class AppCarouselComponent {

    @Input() set images(images: string[]) {
        this.carouselImages = images.map((name) => `/assets/pictures/${name}.jpeg`);
    }

    pauseOnHover = true;
    pauseOnFocus = true;
    interval = 3000;
    carouselImages: string[];
}
