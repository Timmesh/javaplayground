import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-List.service";
import { Receipe } from "./receipe.model";

// If we want to inject a service into a service we need to add @Injectable
@Injectable()
export class ReceipeService {
  receipeChanged: Subject<Receipe[]> = new Subject<Receipe[]>();

  private receipes: Receipe[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  setRecepies(receipes: Receipe[]) {
    this.receipes = receipes;
    this.receipeChanged.next(this.receipes.slice())
  }

  getRecepies() {
    return this.receipes.slice();
  }

  getReceipe(id: number) {
    return this.receipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addReceipe(receipe: Receipe) {
    this.receipes.push(receipe);
    this.receipeChanged.next(this.receipes.slice());
  }

  updateReceipe(index: number, newReceipe: Receipe) {
    this.receipes[index] = newReceipe;
    this.receipeChanged.next(this.receipes.slice());
  }

  deleteReceipe(index:number) {
    this.receipes.splice(index, 1);
    this.receipeChanged.next(this.receipes.slice());
  }

}
