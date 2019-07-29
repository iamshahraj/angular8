import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from "@angular/forms";

import { HeaderComponent } from './components/header/header.component';

import { RecipesComponent } from './views/recipes/recipes.component';
import { RecipeListComponent } from './views/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './views/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './views/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './views/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './views/shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDireactive } from './shared/dropdown.direactive';
import { ShoppingListService } from './views/shopping-list/services/shopping-list.service';
import { RecipeStartComponent } from './views/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './views/recipes/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDireactive,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
