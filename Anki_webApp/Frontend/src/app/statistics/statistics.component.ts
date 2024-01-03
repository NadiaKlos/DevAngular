import { Component } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent {

  // Données d'un utilisateur fictif
  userStats = {
    progress: [
      { date: '2023-12-01', level: 30 },
      { date: '2023-12-05', level: 65 },
      { date: '2023-12-10', level: 89 },
    ],

    subjectsToReview: [
      { subject: 'Biologie', score: 78 },
      { subject: 'Histoire', score: 66 },
      { subject: 'Géographie', score: 52 },
    ],
    dailyLoginTime: [
      { date: '2023-12-01', time: 123 },
      { date: '2023-12-05', time: 38 },
      { date: '2023-12-10', time: 50 },
      // Ajoutez d'autres données de temps de connexion au besoin
    ],
    averageQuizScores: [
      { subject: 'Mathématiques', score: 85 },
      { subject: 'Biologie', score: 78 },
      { subject: 'Histoire', score: 66 },
      { subject: 'Géographie', score: 52 },

    ],
    cardsAddedTotal: 14, // Nombre total de cartes ajoutées

  };

  // Données pour le graphique à barres (progrès global)
  barChartData: any[] = [
    { data: this.userStats.progress.map(item => item.level), label: 'Progrès' },
  ];

  barChartLabels: string[] = this.userStats.progress.map(item => item.date);

  barChartOptions: any = {
    responsive: true,
    scales: {
      xAxes: [{
        scaleLabel: { display: true, labelString: 'Date' },
      }],
      yAxes: [{
        scaleLabel: { display: true, labelString: 'Niveau de maîtrise' },
        ticks: { beginAtZero: true },
      }],
    },
  };

  barChartLegend = true;
  barChartType = 'bar';



  dailyStudyTimeOptions: any = {
    responsive: true,
    scales: {
      xAxes: [{
        scaleLabel: { display: true, labelString: 'Date' },
      }],
      yAxes: [{
        scaleLabel: { display: true, labelString: 'Temps passé (minutes)' },
        ticks: { beginAtZero: true },
      }],
    },
  };

  dailyStudyTimeLegend = true;
  dailyStudyTimeChartType = 'bar';

  // Données pour le graphique en ligne (temps moyen de connexion)
  dailyLoginTimeData: any[] = [
    { data: this.userStats.dailyLoginTime.map(item => item.time), label: 'Temps de connexion (minutes)' },
  ];

  dailyLoginTimeLabels: string[] = this.userStats.dailyLoginTime.map(item => item.date);

  dailyLoginTimeOptions: any = {
    responsive: true,
    scales: {
      xAxes: [{
        scaleLabel: { display: true, labelString: 'Date' },
      }],
      yAxes: [{
        scaleLabel: { display: true, labelString: 'Temps de connexion (minutes)' },
        ticks: { beginAtZero: true },
      }],
    },
  };

  dailyLoginTimeLegend = true;
  dailyLoginTimeChartType = 'line';

  subjectsToReview = this.userStats.subjectsToReview;

  averageQuizScores = this.userStats.averageQuizScores;

  cardsAddedTotal = this.userStats.cardsAddedTotal;
}
