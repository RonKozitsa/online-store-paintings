import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-carousel',
    templateUrl: './app-carousel.component.html',
    styleUrls: ['./app-carousel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class AppCarouselComponent {

    @Input() set images(imagesPath: string[]) {
        this.carouselImages = imagesPath.map((path) => `/assets/pictures/${path}`);
    }

    pauseOnHover = true;
    pauseOnFocus = true;
    interval = 10000;
    carouselImages: string[];
}
