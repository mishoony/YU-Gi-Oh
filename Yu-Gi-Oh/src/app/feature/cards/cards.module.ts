import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list/card-list.component';
import { CardListItemComponent } from './card-list-item/card-list-item.component';



@NgModule({
  declarations: [
    CardListComponent,
    CardListItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CardsModule { }
