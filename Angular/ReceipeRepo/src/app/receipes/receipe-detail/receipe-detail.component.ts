import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-List.service';
import { Receipe } from '../receipe.model';
import { ReceipeService } from '../receipe.service';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.css']
})
export class ReceipeDetailComponent implements OnInit {
  @Input() receipe: Receipe;
  constructor(private receipeService: ReceipeService) { }

  ngOnInit() {
  }

  addToShoppingList() {
    this.receipeService.addIngredientsToShoppingList(this.receipe.ingredients);
  }

}
