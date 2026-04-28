import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Challenge } from '../../../core/models/challenge.model';

@Component({
  selector: 'app-challenge-shell',
  standalone: true,
  imports: [],
  templateUrl: './challenge-shell.component.html',
  styleUrl: './challenge-shell.component.css',
})
export class ChallengeShellComponent {
  @Input() challenge!: Challenge;

  constructor(private router: Router) {}

  get difficultyClass(): string {
    const map: Record<string, string> = {
      beginner: 'bg-green-900/50 text-green-400 border border-green-800',
      intermediate: 'bg-yellow-900/50 text-yellow-400 border border-yellow-800',
      advanced: 'bg-red-900/50 text-red-400 border border-red-800',
    };
    return map[this.challenge.difficulty];
  }

  goBack(): void {
    this.router.navigateByUrl('/');
  }
}
