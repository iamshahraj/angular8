import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipeService } from '../services/recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      });
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.recipeService.addIngredientToShoppingList(ingredients);
  }

}
