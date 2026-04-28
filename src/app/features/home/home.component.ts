import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChallengeCardComponent } from '../../shared/components/challenge-card/challenge-card.component';
import { CHALLENGES } from '../../core/data/challenges.data';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ChallengeCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  challenges = CHALLENGES;
  activeTags: Set<string> = new Set();

  get allTags(): string[] {
    const tags = new Set<string>();
    this.challenges.forEach(c => c.tags.forEach(t => tags.add(t)));
    return Array.from(tags);
  }

  get filteredChallenges() {
    if (this.activeTags.size === 0) return this.challenges;
    return this.challenges.filter(c =>
      c.tags.some(t => this.activeTags.has(t))
    );
  }

  toggleTag(tag: string) {
    if (this.activeTags.has(tag)) {
      this.activeTags.delete(tag);
    } else {
      this.activeTags.add(tag);
    }
  }

  getTagClass(tag: string): string {
    const base = 'px-3 py-1 rounded-full text-xs font-mono transition-all duration-200 border ';
    return this.activeTags.has(tag)
      ? base + 'bg-cyan-400 text-neutral-950 border-cyan-400'
      : base + 'bg-transparent text-neutral-400 border-neutral-700 hover:border-cyan-400 hover:text-cyan-400';
  }

}
