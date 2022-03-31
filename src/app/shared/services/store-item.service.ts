import {Injectable} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import {ItemExpandedViewComponent} from '../components/item-expanded-view/item-expanded-view.component';
import {ModalServiceService} from './modal-service.service';

@Injectable({
    providedIn: 'root'
})
export class StoreItemService {

    constructor(private modalServiceService:ModalServiceService) {
    }

    showItemDetails(): void {
        this.modalServiceService.open(ItemExpandedViewComponent)
    }
}
