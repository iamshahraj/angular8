import { EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

export class ShoppingListService {
  ingredientChnage = new EventEmitter<Ingredient[]>();
  
  ingredients: Ingredient[] = [];

  constructor() { }

  getIngredient() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
    this.ingredientChnage.emit(this.ingredients.slice())
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients)
    this.ingredientChnage.emit(this.ingredients.slice())
  }
}
