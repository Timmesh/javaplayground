import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

export class ShoppingListService {
  ingredientsUpdated: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 200),
    new Ingredient('Oranges', 200),
  ];

  getIngredients() {
    // As we are using slice the updated ingredients wont be retured on add ingredients
    // So we need to emit the event to specify the ingredient is emitted.
    return this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsUpdated.emit(this.ingredients.slice());
  }
}
