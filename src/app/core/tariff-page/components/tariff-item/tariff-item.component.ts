import { Component, Input } from '@angular/core';
import { ITariff } from '../../../../utils/interfaces/tariff-page.interfaces';
import { BENEFITS_CAPTIONS_AMOUNT } from '../../../../utils/constants/global.const';
import { UtilsService } from '../../../../utils/services/utils.service';

@Component({
  selector: 'app-tariff-item',
  templateUrl: './tariff-item.component.html',
  styleUrls: ['./tariff-item.component.scss']
})
export class TariffItemComponent {
  @Input() public tariff: ITariff;

  public benefitsCaptionsAmount = BENEFITS_CAPTIONS_AMOUNT;

  constructor(
    public utilsService: UtilsService
  ) { }
}
