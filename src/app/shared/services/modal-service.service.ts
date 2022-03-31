import { Injectable } from '@angular/core';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.modalDialogClass = 'modal-dialog-centered';
  }

  open(content) {
    this.modalService.open(content);
  }
}
