import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { Receipe } from './receipe.model';

export class ReceipeService {
  public receipeSelected: EventEmitter<Receipe> = new EventEmitter<Receipe>();

  private receipes: Receipe[] = [
    new Receipe(
      'A Test Recipe1',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('I1', 10),
        new Ingredient('I2', 20)
      ]
    ),
    new Receipe(
      'A Test Recipe2',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('I3', 11),
        new Ingredient('I4', 22 )
      ]
    ),
  ];

  getRecepies() {
    return this.receipes.slice();
  }
}
