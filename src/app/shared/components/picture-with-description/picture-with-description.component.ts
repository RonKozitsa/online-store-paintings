import {Component, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
    selector: 'app-picture-with-description',
    templateUrl: './picture-with-description.component.html',
    styleUrls: ['./picture-with-description.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PictureWithDescriptionComponent {

    @Input() imgSrc: string;
    @Input() description: string;
}
