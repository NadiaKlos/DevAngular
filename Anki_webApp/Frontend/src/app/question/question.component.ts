import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input() questionText: string = '';
  userAnswer: string = '';
  showResult: boolean = false;
  isAnswerCorrect: boolean = false;

  onSubmit() {
    // Votre logique de vérification de réponse ici
    // Par exemple, comparez userAnswer avec la réponse correcte
    // Pour l'exemple, considérons simplement "réponseCorrecte" comme la réponse correcte
    const réponseCorrecte = "réponseCorrecte";
    this.isAnswerCorrect = this.userAnswer === réponseCorrecte;
    this.showResult = true;
  }
}

