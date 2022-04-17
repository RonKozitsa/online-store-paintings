import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
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

  constructor(public activeModal: NgbActiveModal, private router: Router) {}

  navigateToContact(item: StoreItemInterface) {
    const x = '';
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
}
