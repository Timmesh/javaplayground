import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Receipe } from "../receipes/receipe.model";
import { ReceipeService } from "../receipes/receipe.service";
import { map } from "rxjs/operators";
@Injectable({ providedIn: "root" })
export class DataStorageService {
  constructor(
    private httpClient: HttpClient,
    private receipeService: ReceipeService
  ) {}

  storeReceipes() {
    const receipes = this.receipeService.getRecepies();
    this.httpClient
      .put(
        "https://receiperepo-default-rtdb.firebaseio.com/receipe.json",
        receipes
      )
      .subscribe((res) => console.log(res));
  }

  fetchReceipes() {
    this.httpClient
      .get<Receipe[]>(
        "https://receiperepo-default-rtdb.firebaseio.com/receipe.json"
      )
      .pipe(
        map((receipes) => {
          receipes.map((receipe) => {
            return {
              ...receipes,
              ingredients: receipe.ingredients ? receipe.ingredients : [],
            };
          });
        })
      )
      .subscribe((res) => {
        this.receipeService.setRecepies(res);
        console.log(res);
      });
  }
}
