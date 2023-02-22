import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';
import { CakeDesignerService } from '../cake-designer.service';
import { Cake, DesignDetailElement, Details } from '../desig-element.model';

@Component({
  selector: 'app-decoration',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  cakeDetails: DesignDetailElement[] = [
    new DesignDetailElement('candles', '../../../assets/img/create-cake/details/candles.jpg', 1.99),
    new DesignDetailElement('topper', '../../../assets/img/create-cake/details/topper.jpeg', 3.99),
    new DesignDetailElement('cookies', '../../../assets/img/create-cake/details/cookies.jpeg', 6.99),
    new DesignDetailElement('balloons', '../../../assets/img/create-cake/details/balloons.jpeg', 7.99),
    new DesignDetailElement('flare', '../../../assets/img/create-cake/details/flare.jpeg', 3.99),
    new DesignDetailElement('flowers', '../../../assets/img/create-cake/details/flowers.jpeg', 7.99),
    new DesignDetailElement('sweets', '../../../assets/img/create-cake/details/sweets.jpeg', 9.99),
    new DesignDetailElement('alcohol', '../../../assets/img/create-cake/details/alcohol.jpeg', 11.99),
    new DesignDetailElement('ganage', '../../../assets/img/create-cake/details/ganage.jpeg', 8.99),
  ]

  constructor(private cakeDesignerService : CakeDesignerService) { }

  ngOnInit() {
  }

  onAddDetailElement(detail: Details) {
    this.cakeDesignerService.addDetailElement(detail);
  }

  onRemoveDetailElement(detail: Details) {
    this.cakeDesignerService.removeDetailElement(detail);
  }
}
