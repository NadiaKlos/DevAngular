import { Component, OnInit } from '@angular/core';
import { LessonService } from '../lesson.service';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css'],
})
export class LessonListComponent implements OnInit {
  lessons: any[] = [];

  constructor(private lessonService: LessonService) {}

  ngOnInit(): void {
    this.loadLessons();
  }

  loadLessons() {
    this.lessonService.getLessons().subscribe(
      (data) => {
        this.lessons = data;
      },
      (error) => {
        console.error('Error loading lessons: ', error);
      }
    );
  }
}

