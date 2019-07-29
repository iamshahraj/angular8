import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/services/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      "Vegan sausage rolls",
      "A buffet table with these moreish vegan sausage rolls, made with mushrooms, brown rice miso, mustard and sage",
      "https://www.sainsburysmagazine.co.uk/uploads/media/400x400/08/9478-Vegan-sausage-rolls.jpg?v=1-0",
      [
        new Ingredient('chestnut mushrooms', 250),
        new Ingredient('leeks', 2),
        new Ingredient('large garlic cloves, crushed', 2),
      ]
    ),
    new Recipe(
      "Strawberry shortcake",
      "Layer biscuits with strawberries and cream and they'll soften to create an indulgent no-bake dessert. Super easy and delicious, it's a fabulous summer treat",
      "https://cook.me/wp-content/uploads/2019/06/Strawberry-shortcake-slice-Recipe-How-To-Lemon-Strawberry-shortcake-slice-Delicious-Strawberry-shortcake-slice9-400x400.jpg",
      [
        new Ingredient('vanilla bean paste', 1),
        new Ingredient('orange blossom water', 1),
        new Ingredient('strawberries', 3),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}
