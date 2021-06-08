import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Receipe } from '../receipe.model';
import { ReceipeService } from '../receipe.service';

@Component({
  selector: "app-receipe-list",
  templateUrl: "./receipe-list.component.html",
  styleUrls: ["./receipe-list.component.css"],
})
export class ReceipeListComponent implements OnInit {
  @Output() receipeSelected: EventEmitter<Receipe> =
    new EventEmitter<Receipe>();

  receipes: Receipe[];

  constructor(
    private receipeService: ReceipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.receipeService.receipeChanged.subscribe((receipes) => {
      this.receipes = receipes;
    });
    this.receipes = this.receipeService.getRecepies();
  }

  createNewReceipe() {
    this.router.navigate(["new"], { relativeTo: this.route });
  }
}
