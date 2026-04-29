export type Difficulty = 'begginer' | 'intermediate' | 'advanced';

export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  tags: string[];
  route: string;
  completedAt: string;
  highlights: string[];
}
