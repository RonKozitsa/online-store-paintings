import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, interval, Subject, takeUntil } from 'rxjs';
import { trigger } from '@angular/animations';

import { animations } from '../shared/animations/animations';
import { ButtonType } from '../shared/components/app-button/app-button.interface';
import { artistsQuotes } from './home-page.consts';
import { QuoteI } from './home-page.interface';
import { MainPagesNavigationNamesEnums } from '../shared/interfaces/pages-navigation-names.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [trigger('fadeInOut', animations.fadeInOut)],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit, OnDestroy {
  readonly mainPagesNavigationNamesEnums = MainPagesNavigationNamesEnums;

  currentQuote = artistsQuotes[0];
  quotes: QuoteI[] = artistsQuotes;
  showQuote$ = new BehaviorSubject(true);
  destroy$ = new Subject<void>();
  buttonType = ButtonType;

  ngOnInit() {
    this.startQuotesInterval();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private startQuotesInterval() {
    interval(5000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.showQuote$.next(false);
        setTimeout(() => {
          // to make disappear and reappear
          this.currentQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
          this.showQuote$.next(true);
        }, 1000);
      });
  }
}
