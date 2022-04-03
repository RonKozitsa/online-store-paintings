import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import {StoreItemInterface} from '../store-item/store-item.interface';
import {ButtonStyle} from '../online-store-button/app-button.interface';
import {Router} from '@angular/router';

@Component({
    selector: 'app-item-expanded-view',
    templateUrl: './item-expanded-view.component.html',
    styleUrls: ['./item-expanded-view.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemExpandedViewComponent implements OnInit {
    @Input() itemConfig: StoreItemInterface;

    buttonType = ButtonStyle;

    constructor(public activeModal: NgbActiveModal, private router: Router) {
    }

    ngOnInit(): void {
    }

    navigateToContact(item: StoreItemInterface) {
        this.activeModal.close();
        this.router.navigate(['/contact'], {
            queryParams: {
                paintingName: item.name,
                paintingId: item.id
            }
        });
    }

}
