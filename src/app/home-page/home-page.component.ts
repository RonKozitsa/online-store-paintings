import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {interval, Subject, takeUntil} from 'rxjs';
import {trigger} from '@angular/animations';

import {animations} from '../shared/animations/animations';
import {ButtonStyle} from '../shared/components/online-store-button/app-button.interface';
import {artistsQuotes} from './home-page.consts';
import {QuoteI} from './home-page.interface';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
    animations: [trigger('fadeInOut', animations.fadeInOut)],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit, OnDestroy {
    currentQuote = artistsQuotes[0];
    loadingQuote: boolean;

    images = ['sitting', 'peacock', 'hands-painting', 'painting-in-progress'];
    quotes: QuoteI[] = artistsQuotes;
    destroy$ = new Subject<void>();
    buttonStyle = ButtonStyle;


    constructor(private router: Router, private changeDetectorRef: ChangeDetectorRef) {
    }

    ngOnInit() {
        interval(8000).pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.loadingQuote = true;
            this.changeDetectorRef.markForCheck();
            setTimeout(() => {
                this.currentQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
                this.loadingQuote = false;
                this.changeDetectorRef.markForCheck();
            }, 1000);
        });
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

}
