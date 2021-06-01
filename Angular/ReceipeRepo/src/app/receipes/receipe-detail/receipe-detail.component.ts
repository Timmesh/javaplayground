import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Receipe } from '../receipe.model';
import { ReceipeService } from '../receipe.service';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.css'],
})
export class ReceipeDetailComponent implements OnInit {
  receipe: Receipe;
  id: number;

  constructor(
    private receipeService: ReceipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // This Route Snapshot param only work first time we load detail, so cant use this.
    // const id = this.route.snapshot.params['id'];
    this.route.params.subscribe((params: Params) => {
      // Adding + to params to cast it to number
      this.id = +params['id'];
      this.receipe = this.receipeService.getReceipe(this.id);
    });
  }

  addToShoppingList() {
    this.receipeService.addIngredientsToShoppingList(this.receipe.ingredients);
  }
}
