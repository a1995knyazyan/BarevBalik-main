import { Component, OnInit } from '@angular/core';
import {CardsService} from "../../services/cards.service";
import {CardI} from "../../interfaces/card.interface";
import {Observable} from "rxjs";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cardsList$: Observable<CardI[]> = this.cardsService.cards$;

  constructor(
      private cardsService: CardsService
  ) { }

  ngOnInit(): void {
  }

  removeCardEventHandler(cardId: number): void {
    this.cardsService.removeCard(cardId);
  }

}
