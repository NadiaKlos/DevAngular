import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LessonService } from '../lesson.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private lessonService: LessonService) {
    this.registrationForm = fb.group({
      username: ['', Validators.required],
    });
  }

  registerUser() {
    if (this.registrationForm.valid) {
      const username = this.registrationForm.value.username;
      this.lessonService.registerUser(username).subscribe(
        (data) => {
          console.log('User registered successfully: ', data);
        },
        (error) => {
          console.error('Error registering user: ', error);
        }
      );
    }
  }
}

