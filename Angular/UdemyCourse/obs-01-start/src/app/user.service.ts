import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

// Provided In: to specify the provider instead of specifyinh in app.module.ts
@Injectable({ providedIn: "root" })
export class UserService {
  // activateEmitter = new EventEmitter<boolean>();
  activateEmitter = new Subject<boolean>();
}
