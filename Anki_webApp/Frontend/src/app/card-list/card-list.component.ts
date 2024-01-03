// card-list.component.ts
import { Component, OnInit } from '@angular/core';
// card-list.component.ts
import { CardService } from '../card.service';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  cards!: any[]; // Assurez-vous que le type correspond à la structure de vos cartes
  showCardList: boolean = false; // Indicateur pour afficher/masquer la liste

  constructor(private cardService: CardService) {}

  ngOnInit(): void {}

  showCards(): void {
    this.cardService.getCards().subscribe((data) => {
      this.cards = data;
      this.showCardList = true; // Afficher la liste lorsque les cartes sont chargées
    });
  }
}
