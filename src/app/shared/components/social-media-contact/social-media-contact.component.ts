import {Component, ChangeDetectionStrategy, Inject} from '@angular/core';

import {SocialMediaContactInterface} from './social-media-contact.interface';
import {WINDOW} from '../../injection-tokens/window-token';

@Component({
    selector: 'app-social-media-contact',
    templateUrl: './social-media-contact.component.html',
    styleUrls: ['./social-media-contact.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialMediaContactComponent {
    configurations: SocialMediaContactInterface[];

    constructor(@Inject(WINDOW) private window: Window) {
        this.getConfigurations();
    }

    getConfigurations() {
        this.configurations = [
            {
                name: 'Facebook',
                url: '',
                logo: 'facebook.svg'
            },
            {
                name: 'Instagram',
                url: '',
                logo: 'instagram.svg'
            },
            {
                name: 'Linkedin',
                url: '',
                logo: 'linkedin.svg'
            }
        ];
    }

    navigateToSocialMediaPage(url: string) {
        this.window.open(url, '_blank');
    }
}
