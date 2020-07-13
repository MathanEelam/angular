import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe ('A test Recipe', 'This is simply a test', 'https://img.taste.com.au/I4yphQ0v/w316-h210-cfill-q80/taste/2020/06/satay-beef-and-noodle-stir-fry-162997-2.jpg'),
    new Recipe ('A test Recipe', 'This is simply a test', 'https://img.taste.com.au/I4yphQ0v/w316-h210-cfill-q80/taste/2020/06/satay-beef-and-noodle-stir-fry-162997-2.jpg'),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
