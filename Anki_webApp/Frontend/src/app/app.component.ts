// app.component.ts
import { Component } from '@angular/core';
import { Subject } from './subject-selector/subject-selector.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedSubject: Subject | null = null;
  welcomeMessageVisible = false;

  handleSubjectSelection(subject: Subject | null) {
    this.selectedSubject = subject;

    if (subject === null) {
      this.hideWelcomeMessage();
    } else {
      this.welcomeMessageVisible = subject.name === 'Accueil';
    }
  }

  hideWelcomeMessage() {
    this.welcomeMessageVisible = false;
  }
}
