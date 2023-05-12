import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {CardI} from "../interfaces/card.interface";

@Injectable({
    providedIn: 'root'
})
export class CardsService {
    private readonly _cards: BehaviorSubject<CardI[]> = new BehaviorSubject<CardI[]>([]);
    public readonly cards$ = this._cards.asObservable();

    get cards(): CardI[] {
        return this._cards.getValue();
    }

    set cards(data: CardI[]) {
        this._cards.next(data);
    }

    removeCard(cardId: number): void {
        const cardsCopyList = [...this.cards];
        for(let i = 0; i < cardsCopyList.length; i++) {
            if (cardsCopyList[i].id === cardId) {
                cardsCopyList.splice(i, 1);
                this.cards = [...cardsCopyList];
            }
        }
    }

    sortCards(): void {
        const cardsCopyList = this.cards.slice(0);
        this.cards = cardsCopyList.sort(function(a,b) {
            return a.count - b.count;
        });
    }

    getCardItem(id: number): CardI | undefined {
        return this.cards.find((item) => {
            return item.id === id;
        });
    }

    generateRandomCard(): void {
        const randomInteger: number = Math.floor(Math.random() * 100);
        // check if integer already exists
        if (this.getCardItem(randomInteger)) {
            this.generateRandomCard();
        } else {
            this.cards = [...this.cards, {
                count: randomInteger,
                id: randomInteger
            } as CardI]
        }
    }
}