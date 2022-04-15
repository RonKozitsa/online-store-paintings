import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import { StoreItemInterface } from '../store-item/store-item.interface';
import { ButtonType } from '../app-button/app-button.interface';

@Component({
  selector: 'app-item-expanded-view',
  templateUrl: './item-expanded-view.component.html',
  styleUrls: ['./item-expanded-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemExpandedViewComponent {
  @Input() itemConfig: StoreItemInterface;

  readonly buttonType = ButtonType;

  frameColor: string;
  cachedFrameColor: string;
  viewingRealDimensions: boolean;

  constructor(public activeModal: NgbActiveModal, private router: Router, private changeDetectorRef: ChangeDetectorRef) {}

  navigateToContact(item: StoreItemInterface) {
    this.activeModal.close();
    this.router.navigate(['/contact'], {
      queryParams: {
        paintingName: item.name,
        paintingId: item.id
      }
    });
  }

  onFrameColorPicked(color: string) {
    this.frameColor = color;
  }

  toggleViewingMode() {
    this.viewingRealDimensions = !this.viewingRealDimensions;
    const currentFrameColor = this.frameColor;
    this.frameColor = this.viewingRealDimensions ? undefined : this.cachedFrameColor;
    this.cachedFrameColor = currentFrameColor;
  }
}
