import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Receipe } from '../receipe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css'],
})
export class ReceipeListComponent implements OnInit {
  @Output() receipeSelected: EventEmitter<Receipe> =
    new EventEmitter<Receipe>();

  receipes: Receipe[] = [
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

  onReceipeSelected(receipe: Receipe) {
    this.receipeSelected.emit(receipe);
  }

  constructor() {}

  ngOnInit() {}
}
