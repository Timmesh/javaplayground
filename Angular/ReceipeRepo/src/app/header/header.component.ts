import { Component, EventEmitter, Output } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  collapsed = true;

  constructor(private dataStorageService: DataStorageService) {}

  saveData() {
    this.dataStorageService.storeReceipes();
  }

  fetchData() {
    this.dataStorageService.fetchReceipes().subscribe();
  }
}
