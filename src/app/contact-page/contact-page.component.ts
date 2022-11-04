import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, finalize, Subject } from 'rxjs';

import { ButtonType } from '../shared/components/app-button/app-button.interface';
import { ContactPageFormControls } from './contact-page.interface';

@Component({
  selector: 'app-about-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit, OnDestroy {
  readonly buttonType = ButtonType;
  readonly ContactPageFormControls = ContactPageFormControls;

  submittingForm$ = new BehaviorSubject(false);
  formSubmitted$ = new BehaviorSubject(false);
  destroy$ = new Subject<void>();
  predefinedMessage = '';
  contactForm: FormGroup;
  chosenPaintingId: string;

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {}

  ngOnInit() {
    this.checkQueryParams();
    this.buildForm();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  submitForm() {
    if (this.contactForm.valid) {
      this.submittingForm$.next(true);
      const formData: FormData = new FormData();
      this.setFormSubmitValues(formData);
      this.httpClient
        .post('https://formsubmit.co/ronkoz44@gmail.com', formData, {
          responseType: 'text'
        })
        .pipe(
          finalize(() => {
            this.submittingForm$.next(false);
            this.formSubmitted$.next(true);
          })
        )
        .subscribe();
    }
  }

  private checkQueryParams() {
    const paramsMap: ParamMap = this.activatedRoute.snapshot.queryParamMap;
    this.chosenPaintingId = paramsMap.get('paintingId');
    if (paramsMap.has('paintingName')) {
      this.setPredefinedMessage(paramsMap.get('paintingName'));
    }
  }

  private buildForm() {
    this.contactForm = this.formBuilder.group({
      [ContactPageFormControls.name]: ['', Validators.required],
      [ContactPageFormControls.email]: ['', [Validators.required, Validators.email]],
      [ContactPageFormControls.message]: [this.predefinedMessage, Validators.required],
      [ContactPageFormControls.id]: [this.chosenPaintingId || '']
    });
  }

  private setPredefinedMessage(paintingName: string) {
    this.predefinedMessage = `Hi there ! I love your "${paintingName}" painting !\nIs it available for sale ?`;
  }

  private setFormSubmitValues(formData: FormData) {
    formData.append('_next', 'http://www.blooming-arts.com/contact?submitted=true');
    formData.append('_captcha', 'false');
    formData.append('_template', 'box');
    formData.append('_subject', 'A New Message From Your Website !');
    formData.append(
      '_autoresponse',
      `Thank you for contacting me !\nI'll try to reply as soon as possible.
        \nIn the meantime, you can also try and contact me through one of my social media channels`
    );
    Object.keys(this.contactForm.controls).forEach((key) => {
      formData.append(key, this.contactForm.get(key).value);
    });
  }
}
