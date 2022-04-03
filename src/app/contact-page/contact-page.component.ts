import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ButtonType} from '../shared/components/online-store-button/app-button.interface';

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
    buttonType = ButtonType;
    contactForm: FormGroup;

    constructor() {
    }

    ngOnInit() {
    }

    submitForm() {

    }

}
