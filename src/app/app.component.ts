import { Component, OnInit } from '@angular/core';
import { SessionService } from './session/state/session.service';
import { SessionQuery } from './session/state/session.query';
import { Observable } from 'rxjs';
import { CardService } from './cards/state/card.service';
import { CardQuery } from './cards/state/card.query';
import { Card } from './cards/state/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'akita-demo';

  name$: Observable<string>;

  cards$: Observable<Card[]>;

  constructor(
    private sessionService: SessionService,
    private cardService: CardService,
    private cardQuery: CardQuery,
    private sessionQuery: SessionQuery) {
  }

  ngOnInit(): void {
    this.name$ = this.sessionQuery.name$;
    this.cards$ = this.cardQuery.selectAll();

    this.sessionService.login().subscribe();
    this.cardService.retrieveCard().subscribe();
  }
}
