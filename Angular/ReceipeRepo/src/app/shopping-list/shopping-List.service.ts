import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
import { Subject } from "rxjs";

export class ShoppingListService {
  // ingredientsUpdated: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();
  ingredientsUpdated: Subject<Ingredient[]> = new Subject<Ingredient[]>();

  ingredientEdited: Subject<number> = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 200),
    new Ingredient("Oranges", 200),
  ];

  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }

  getIngredients() {
    // As we are using slice the updated ingredients wont be retured on add ingredients
    // So we need to emit the event to specify the ingredient is emitted.
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsUpdated.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // This will cause emit event after each add ingredient
    /* for (const ingredient of ingredients) {
      this.addIngredient(ingredient);
    } */
    // this.ingredients.push(Ingredient[]) - This will add array as single object in array
    // Spread operator(...) which basically turn an array of elements into list of elements
    this.ingredients.push(...ingredients);
    this.ingredientsUpdated.next(this.ingredients.slice());
  }

  updateIngredient(index:number, newIngredient: Ingredient): void{
    this.ingredients[index] = newIngredient;
    this.ingredientsUpdated.next(this.ingredients.slice());
  }
}
