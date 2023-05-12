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

    addCard(): void {
        this.cards = [...this.cards, this.generateRandomCard()]
    }

    removeCard(cardId: number): void {

    }

    sortCards(): void {

    }

    generateRandomCard(): CardI {
        return {
            count: Math.random(),
            id: Math.random()
        } as CardI;
    }
}