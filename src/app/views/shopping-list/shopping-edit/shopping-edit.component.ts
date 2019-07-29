import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput", { static: false }) nameInputRef: ElementRef;
  @ViewChild("amountInput", { static: false }) amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const inName = this.nameInputRef.nativeElement.value;
    const inAmount = this.amountInputRef.nativeElement.value;

    const ingredient = new Ingredient(inName, inAmount);

    this.shoppingListService.addIngredient(ingredient);
  }
}
