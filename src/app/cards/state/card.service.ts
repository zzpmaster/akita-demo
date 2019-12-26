import { Injectable } from '@angular/core';
import { CardStore, CardState } from './card.store';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { of } from 'rxjs';
import { tap, map, delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CardService extends NgEntityService<CardState> {

  constructor(protected store: CardStore) {
    super(store);
  }

  retrieveCard() {
    return of(['New Component', 'Angular Material', 'Add Dependency', 'Run and Watch Tests', 'Build for Production'])
      .pipe(
        delay(2000),
        map(item => {
          return item.map((i, index) => ({
            id: index,
            title: i,
            command: i.split(' ').reverse()[0].toLocaleLowerCase()
          }));
        }),
        tap(item => this.store.set(item))
      );
  }

}
