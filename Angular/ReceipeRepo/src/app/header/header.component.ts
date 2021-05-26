import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  collapsed = true;
  @Output()
  featureSelected: EventEmitter<string> = new EventEmitter<string>();

  onselect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
