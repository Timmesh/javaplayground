import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Receipe } from '../receipe.model';
import { ReceipeService } from '../receipe.service';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css'],
})
export class ReceipeListComponent implements OnInit {
  @Output() receipeSelected: EventEmitter<Receipe> =
    new EventEmitter<Receipe>();

  receipes: Receipe[];

  constructor(private receipeService: ReceipeService) {}

  ngOnInit() {
    this.receipes = this.receipeService.getRecepies();
  }
}
