import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ReceipesComponent } from "./receipes/receipes.component";
import { ReceipeListComponent } from "./receipes/receipe-list/receipe-list.component";
import { ReceipeDetailComponent } from "./receipes/receipe-detail/receipe-detail.component";
import { ReceipeItemComponent } from "./receipes/receipe-list/receipe-item/receipe-item.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DropdownDirective } from "./shared/dropdown.directive";
import { ShoppingListService } from "./shopping-list/shopping-List.service";
import { AppRoutingModule } from "./app-routing.module";
import { RecipeStartComponent } from "./receipes/recipe-start/recipe-start.component";
import { ReceipeEditComponent } from "./receipes/receipe-edit/receipe-edit.component";
import { ReceipeService } from "./receipes/receipe.service";
import { AuthComponent } from "./auth/auth.component";
import { LoadingSpinnerComponent } from "./shared/loading-spinner/loading-spinner.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceipesComponent,
    ReceipeListComponent,
    ReceipeDetailComponent,
    ReceipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    ReceipeEditComponent,
    AuthComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [ShoppingListService, ReceipeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
