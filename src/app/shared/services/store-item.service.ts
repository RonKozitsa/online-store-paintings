import {Injectable} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {ItemExpandedViewComponent} from '../components/item-expanded-view/item-expanded-view.component';

@Injectable({
    providedIn: 'root'
})
export class StoreItemService {

    constructor(private ngbModalService: NgbModal) {
    }

    showItemDetails(): void {
        this.ngbModalService.open(ItemExpandedViewComponent)
    }
}
