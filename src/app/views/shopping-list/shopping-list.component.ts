import { Component, OnInit } from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from './services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredient();
    this.shoppingListService.ingredientChnage.subscribe((ingredients: Ingredient[]) => 
      this.ingredients = ingredients
    )
  }

  onIngredientAdded(ingredient) {
    return this.ingredients.push(ingredient);
  }
}
