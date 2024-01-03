// packet.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-packet',
  templateUrl: './packet.component.html',
  styleUrls: ['./packet.component.css'],
})
export class PacketComponent implements OnInit {
  packetForm!: FormGroup;
  answerForm!: FormGroup;
  existingCards: any[] = [];
  showModal: boolean = false;
  showAnswerFlag: boolean = false;
  currentAnswer: string = '';
  questions: { question: string, reponse: string }[] = [];
  currentQuestionIndex: number = -1;
  userAnswerCorrect: boolean | null = null;
  correctionText: string = '';
  difficulty: string = '';

  deleteCard(card: any): void {
    const index = this.existingCards.indexOf(card);
    if (index !== -1) {
      this.existingCards.splice(index, 1);
    }
  }

  showAnswer(answer: string): void {
    this.showAnswerFlag = true;
    this.currentAnswer = answer;
  }

  showCoolMessage(): void {
    this.showModal = true;
  }

  hideModal(): void {
    this.showModal = false;
  }
  setDifficulty(selectedDifficulty: string): void {
    this.difficulty = selectedDifficulty;
  }

  chooseRandomQuestion() {
    this.currentQuestionIndex = Math.floor(Math.random() * this.questions.length);

    // Récupérer la question et la réponse associée à la question courante
    const currentQuestion = this.questions[this.currentQuestionIndex];
    this.currentAnswer = currentQuestion.reponse || '';
    this.userAnswerCorrect = null;
    this.correctionText = '';
    this.difficulty = '';
  }

  submitAnswer() {
    if (this.answerForm.valid) {
      const userAnswer = this.answerForm.get('userAnswer')?.value;
      const correctAnswer = this.questions[this.currentQuestionIndex].reponse;

      this.userAnswerCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase();

      this.correctionText = this.userAnswerCorrect ? 'Bonne réponse' : 'Mauvaise réponse';

      this.answerForm.reset();

      // Passer à la question suivante
      this.chooseRandomQuestion();
    }
  }

  ngOnInit() {
    this.existingCards.push({
      matiere: 'Mathématiques',
      titre: 'Card 1',
      question: 'Quelle est la capitale de la France?',
      reponse: 'Paris',
    });
    this.existingCards.push({
      matiere: 'Histoire',
      titre: 'Card 2',
      question: 'Quand a eu lieu la Révolution française?',
      reponse: '1789',
    });
    this.existingCards.push({
      matiere: 'Géographie',
      titre: 'Card 3',
      question: 'Quel est le plus grand océan du monde?',
      reponse: 'Le Pacifique'
    });
    this.existingCards.push({
      matiere: 'Sciences',
      titre: 'Card 4',
      question: 'Quel est le processus de photosynthèse?',
      reponse: "Processus par lequel les plantes, arbres etc convertissent l'énergie lumineuse en énergie chimique",
    });
    this.existingCards.push({
      matiere: 'Langues',
      titre: 'Card 5',
      question: 'Comment dit-on "merci" en espagnol?',
      reponse: 'Gracias',
    });

    this.questions.push({ question: "Quelle est la capitale de l'Allemagne?", reponse: 'Berlin' });
    this.questions.push({ question: "Combien de planètes dans notre système solaire?", reponse: '8' });
    this.questions.push({ question: "Qui a écrit Roméo et Juliette?", reponse: 'William Shakespeare' });
    this.questions.push({ question: "Quel est le plus grand mammifère marin?", reponse: 'La baleine bleue' });
    this.questions.push({ question: "Combien de côtés a un hexagone?", reponse: '6' });

    this.answerForm = this.formBuilder.group({
      userAnswer: ['', Validators.required],
    });

    this.chooseRandomQuestion();
  }

  constructor(private formBuilder: FormBuilder) {
    this.packetForm = this.formBuilder.group({
      matiere: ['', Validators.required],
      titre: ['', Validators.required],
      question: ['', Validators.required],
      reponse: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.packetForm.valid) {
      const newCard = this.packetForm.value;
      this.existingCards.push(newCard);
      this.packetForm.reset();
    }
  }
}
