import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('قرمه سبزی', 'غذای ایرانی', 'https://gate-of-nations.org/storage/2019/11/AP.-Food-and-Drinks-in-Iran-Ghorme-Sabzi.jpg'),
    new Recipe( 'کباب', 'غذای ترکی', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
