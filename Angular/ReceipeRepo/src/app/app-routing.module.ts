import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceipeDetailComponent } from './receipes/receipe-detail/receipe-detail.component';
import { ReceipesComponent } from './receipes/receipes.component';
import { RecipeStartComponent } from './receipes/recipe-start/recipe-start.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'receipes', pathMatch: 'full' },
  {
    path: 'receipes',
    component: ReceipesComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: ':id', component: ReceipeDetailComponent }
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
