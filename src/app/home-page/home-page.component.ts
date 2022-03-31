import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {interval, Subject, takeUntil} from 'rxjs';
import {trigger} from '@angular/animations';

import {animations} from '../shared/animations/animations';
import {ButtonType} from '../shared/components/online-store-button/app-button.interface';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
    animations: [trigger('fadeInOut', animations.fadeInOut)],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit, OnDestroy {
    currentSentence: string;
    loadingSentence: boolean;

    images = ['sitting', 'peacock', 'hands-painting', 'painting-in-progress'];
    sentences = ['sitting', 'peacock', 'hands-painting', 'painting-in-progress'];
    destroy$ = new Subject<void>();
    ButtonType = ButtonType;


    constructor(private router: Router, private changeDetectorRef: ChangeDetectorRef) {
    }

    ngOnInit() {
        interval(5000).pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.loadingSentence = true;
            this.changeDetectorRef.markForCheck();
            setTimeout(() => {
                this.currentSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)];
                this.loadingSentence = false;
                this.changeDetectorRef.markForCheck();
            }, 1000);
        });
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    navigateToCollection() {
        this.router.navigate(['/shop']);
    }

}
