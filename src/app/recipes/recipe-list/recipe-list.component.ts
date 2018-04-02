import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe'
      , 'This is a simple test recipe'
      , 'https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg'),
      new Recipe('A Test Recipe 2'
      , 'This is a simple test recipe 2'
      , 'https://pbs.twimg.com/profile_images/750559002166263808/dVrxkvEM_400x400.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }
}
