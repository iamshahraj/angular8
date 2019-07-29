import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './views/recipes/recipes.component';
import { ShoppingListComponent } from './views/shopping-list/shopping-list.component';
import { RecipeStartComponent } from './views/recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './views/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './views/recipes/recipe-edit/recipe-edit.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: '/recipes',
    pathMatch: 'full'
  },
  {
    path: "recipes",
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent },
    ]
  },
  {
    path: "shopping-list",
    component: ShoppingListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
