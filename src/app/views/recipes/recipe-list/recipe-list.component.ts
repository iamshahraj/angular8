import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe(
      "recipe 1",
      "test desc 1",
      "https://hips.hearstapps.com/del.h-cdn.co/assets/18/11/2048x1024/landscape-1520957481-grilled-salmon-horizontal.jpg?resize=1200:*"
    ),
    new Recipe(
      "recipe 2",
      "test desc 2",
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/9/22/0/FNK_Shortcut-Chicken-Enchiladas_s4x3.jpg.rend.hgtvcom.616.462.suffix/1474588972138.jpeg"
    ),
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }
}
