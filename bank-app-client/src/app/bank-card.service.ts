import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Card} from "../domain/card";

@Injectable({
  providedIn: 'root'
})
export class BankCardService {

  cards: Card[] = [];
  filteredCards: Card[] = this.cards;

  constructor(
    private http: HttpClient
  ){}

  async getCards(){
    const cards = await (this.http.get('bank/cards/getAll')
      .toPromise() as Promise<any[]>);
    this.filteredCards = this.cards = cards.map(this.createCardModel);
  }

  async getCardByID(cardID: number): Promise<Card>{
    const card = await (this.http.get(`bank/cards/get/byID/${cardID}`)
      .toPromise() as Promise<any>);
    return this.createCardModel(card);
  }

  async createCard (card: Card): Promise<any>{
    console.log(card);
    await this.http.post('bank/cards/create', card).toPromise();
  }

  async modifyCard (card: Card): Promise<any>{
    await this.http.patch(`bank/cards/modify/${card.id}`, card).toPromise();
  }

  async ConnectCardWithAccount (cardId: number,accountId: number): Promise<any>{
    await this.http.patch(`bank/cards/${cardId}/addAccount?accountId=${accountId}`,null).toPromise();
  }

  async deleteCard (card: Card): Promise<any>{
    await this.http.delete(`bank/cards/delete/${card.id}`).toPromise();
    this.getCards();
  }

  private createCardModel(card: any): Card{
    return {
      ...card,
    } as Card;
  }

  filterChange(filterValue: string) {
    if(typeof filterValue === 'string'){
      if(filterValue === ''){
        this.filteredCards = this.cards;
      }else{
        this.filteredCards = this.cards.filter(card => {
          return card.cardNumber.includes(filterValue);
        });
      }
    }
  }
}
