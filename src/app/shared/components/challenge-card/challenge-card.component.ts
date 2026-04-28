import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Challenge } from '../../../core/models/challenge.model';

@Component({
  selector: 'app-challenge-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './challenge-card.component.html',
  styleUrl: './challenge-card.component.css',
})
export class ChallengeCardComponent {
  @Input() challenge!: Challenge;

  get difficultyClass(): string {
    const map: Record<string, string> = {
      beginner: 'bg-green-900/50 text-green-400 border border-green-800',
      intermediate: 'bg-yellow-900/50 text-yellow-400 border border-yellow-800',
      advanced: 'bg-red-900/50 text-red-400 border border-red-800',
    };
    return map[this.challenge.difficulty];
  }
}
