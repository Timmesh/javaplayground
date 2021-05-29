import { Receipe } from './receipe.model';

export class ReceipeService {
  private receipes: Receipe[] = [
    new Receipe(
      'A Test Recipe1',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    ),
    new Receipe(
      'A Test Recipe2',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    ),
  ];

  getRecepies() {
    return this.receipes.slice();
  }
}
