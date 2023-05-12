import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { CardItemComponent } from './card-item/card-item.component';
import {CardsRoutingModule} from "./cards-routing.module";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    CardsComponent,
    CardItemComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
      MatIconModule
  ]
})
export class CardsModule { }
