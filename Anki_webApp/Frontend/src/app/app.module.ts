import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { SubjectSelectorComponent } from './subject-selector/subject-selector.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SubjectComponent } from './subject/subject.component';
import { PacketComponent } from './packet/packet.component';
import { GameComponent } from './game/game.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { NgChartsModule } from 'ng2-charts';






const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'subjects', component: SubjectSelectorComponent },
  { path: 'packets', component: PacketComponent },
  { path: 'games', component: GameComponent },
  { path: 'statistics', component: StatisticsComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    LessonListComponent,
    UserRegistrationComponent,
    CardListComponent,
    CardDetailComponent,
    SidebarComponent,
    SubjectSelectorComponent,
    SubjectComponent,
    PacketComponent,
    GameComponent,

    HomeComponent,
    StatisticsComponent,
    QuestionComponent,
    //AppSidebarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    RouterModule.forRoot(routes),
    NgChartsModule,

  ],
  bootstrap: [AppComponent],

})
export class AppModule {}
