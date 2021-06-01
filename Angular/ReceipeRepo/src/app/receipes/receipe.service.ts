import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-List.service";
import { Receipe } from "./receipe.model";

// If we want to inject a service into a service we need to add @Injectable
@Injectable()
export class ReceipeService {
  public receipeSelected: EventEmitter<Receipe> = new EventEmitter<Receipe>();

  private receipes: Receipe[] = [
    new Receipe(
      "A Test Recipe1",
      "This is simply a test",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
      [new Ingredient("I1", 10), new Ingredient("I2", 20)]
    ),
    new Receipe(
      "A Test Recipe2",
      "This is simply a test",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
      [new Ingredient("I3", 11), new Ingredient("I4", 22)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecepies() {
    return this.receipes.slice();
  }

  getReceipe(id: number) {
    return this.receipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
