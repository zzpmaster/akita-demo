import { Injectable } from '@angular/core';
import { Card } from './card.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface CardState extends EntityState<Card> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'card' })
export class CardStore extends EntityStore<CardState> {

  constructor() {
    super();
  }

}

