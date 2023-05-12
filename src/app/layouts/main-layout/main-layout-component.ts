import { Component, OnInit } from '@angular/core';
import {ActionI} from "../../interfaces/action-interface";
import {CardsService} from "../../services/cards.service";

@Component({
    selector: 'main-layout',
    templateUrl: 'main-layout-component.html',
    styleUrls: ['main-layout-component.scss']
})
export class MainLayoutComponent implements OnInit {
    headerButtons: ActionI[] = [];

    constructor(
        private cardsService: CardsService
    ) {
    }

    ngOnInit() {
        this.setHeaderActions();
    }

    setHeaderActions(): void {
        this.headerButtons = [
            {
                key: 'add',
                content: 'add card'
            },
            {
                key: 'sort',
                content: 'sort cards'
            }
        ] as ActionI[]
    }

    handleHeaderEvents(event: string): void {
        switch (event) {
            case 'add' :
                this.cardsService.generateRandomCard();
                break
            case 'sort' :
                this.cardsService.sortCards();
                break
        }
    }
}
