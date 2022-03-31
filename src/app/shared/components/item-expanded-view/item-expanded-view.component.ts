import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {StoreItemInterface} from '../store-item/store-item.interface';

@Component({
  selector: 'app-item-expanded-view',
  templateUrl: './item-expanded-view.component.html',
  styleUrls: ['./item-expanded-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemExpandedViewComponent implements OnInit {
  @Input() itemConfig: StoreItemInterface;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }

}
