import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Receipe } from "../receipes/receipe.model";
import { ReceipeService } from "../receipes/receipe.service";
import { exhaustMap, map, take, tap } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";
@Injectable({ providedIn: "root" })
export class DataStorageService {
  constructor(
    private httpClient: HttpClient,
    private receipeService: ReceipeService,
    private authService: AuthService
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
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        return this.httpClient.get<Receipe[]>(
          "https://receiperepo-default-rtdb.firebaseio.com/receipe.json",
          {
            params: new HttpParams().set('auth', user.token)
          }
        );
      }),
      map((receipes) => {
        return receipes.map((receipe) => {
          return {
            ...receipe,
            ingredients: receipe.ingredients ? receipe.ingredients : [],
          };
        });
      }),
      tap((receipes) => {
        this.receipeService.setRecepies(receipes);
      })
    );
  }
}
