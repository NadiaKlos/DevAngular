// sidebar.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from '../subject-selector/subject-selector.component';





@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Output() selectHome = new EventEmitter<void>();
  @Output() selectSubject = new EventEmitter<Subject>();

  constructor(private router: Router) {}

  navigateTo(path: string): void {
    if (path === '/') {
      this.selectHome.emit();
    } else {
      // Suppose you have a 'subject' object, replace it with your actual subject data
      const subject: Subject = { name: 'Your Subject Name', image: 'subject-image.jpg' };
      this.selectSubject.emit(subject);
      this.router.navigate([path]);
    }
  }
}
