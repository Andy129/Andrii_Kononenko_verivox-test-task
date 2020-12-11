import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TariffPageComponent } from './tariff-page.component';
import { TariffListComponent } from './components/tariff-list/tariff-list.component';
import { TariffItemComponent } from './components/tariff-item/tariff-item.component';
import { SortPanelComponent } from './components/sort-panel/sort-panel.component';
import { SliceArrayModule } from '../../utils/pipes/class/slice-array.module';



@NgModule({
  declarations: [
    TariffPageComponent,
    TariffListComponent,
    TariffItemComponent,
    SortPanelComponent
  ],
  exports: [
    TariffPageComponent
  ],
  imports: [
    CommonModule,
    SliceArrayModule
  ]
})
export class TariffPageModule { }
