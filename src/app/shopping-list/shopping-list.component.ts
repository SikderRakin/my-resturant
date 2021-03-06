import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';


import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit,OnDestroy {
 
  ingredients: Ingredient[];
igChangeSub:Subscription;
  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients=this.slService.getAllIngredient();
   this.igChangeSub=this.slService.ingredientsChange
     .subscribe((ingredients: Ingredient[]) => this.ingredients = ingredients);
   
  }
  ngOnDestroy():void{
    this.igChangeSub.unsubscribe();
  }
  onEdititem(index:number){
    debugger;
    this.slService.startedEditing.next(index);

  }
}
