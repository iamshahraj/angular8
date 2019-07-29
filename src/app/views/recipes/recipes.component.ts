import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe((recipe: Recipe) => {
        this.selectedRecipe = recipe;
      });
  }
}
