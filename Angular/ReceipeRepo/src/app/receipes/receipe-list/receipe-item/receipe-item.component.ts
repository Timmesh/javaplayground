import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Receipe } from '../../receipe.model';
import { ReceipeService } from '../../receipe.service';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css'],
})
export class ReceipeItemComponent implements OnInit {
  @Input() receipe: Receipe;
  // @Output() receipeClicked: EventEmitter<void> = new EventEmitter<void>();
  constructor(private reeeipeService: ReceipeService) {}

  ngOnInit() {}

  onSelected() {
    // this.receipeClicked.emit();
    this.reeeipeService.receipeSelected.emit(this.receipe);
  }
}
