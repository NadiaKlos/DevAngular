// card.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  getCards(): Observable<any[]> {
    const cards = [
      { matiere: 'Mathématiques', titre: 'Card 1', question: 'Quelle est la capitale de la France?' },
      { matiere: 'Histoire', titre: 'Card 2', question: 'Quand a eu lieu la Révolution française?' },
      // Ajoutez d'autres cartes au besoin
    ];

    return of(cards);
  }
}
