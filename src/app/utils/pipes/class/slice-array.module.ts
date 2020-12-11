import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliceArrayPipe } from './slice-array.pipe';



@NgModule({
  declarations: [SliceArrayPipe],
  imports: [
    CommonModule
  ],
  exports: [SliceArrayPipe]
})
export class SliceArrayModule { }
