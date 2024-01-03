// subject-selector.component.ts
import { Component, EventEmitter, Output } from '@angular/core';


// subject-selector.component.ts
export class Subject {
  name!: string;
  image!: string;
  // ... définition de la classe
}

@Component({
  selector: 'app-subject-selector',
  templateUrl: './subject-selector.component.html',
  styleUrls: ['./subject-selector.component.css'],
})
export class SubjectSelectorComponent {
  subjects: Subject[] = [
    { name: 'Mathématiques', image: 'https://cdn.futura-sciences.com/buildsv6/images/square1280/d/9/5/d956012a74_98582_maths-physique.jpg' },
    { name: 'Programmation', image: 'https://img.freepik.com/photos-gratuite/contexte-programmation-personne-travaillant-codes-ordinateur_23-2150010125.jpg' },
    { name: 'Cybersécurité', image: 'https://www.senat.fr/fileadmin/import/files/fileadmin/Fichiers/Images/delegation/entreprise/index.jpg' },
    { name: 'IA', image: 'https://www.zdnet.com/a/img/2023/04/24/a6f0b02f-5fc0-43f5-a206-662c8d9ae947/gettyimages-1418934535-1.jpg' },
  ];
  selectedSubject: Subject | null = null;

  @Output() subjectSelected = new EventEmitter<Subject>();

  selectSubject(subject: Subject) {
    this.selectedSubject = subject;
    this.subjectSelected.emit(subject);
  }
}
