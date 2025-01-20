import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { Recipe } from '../../modules/recipe.model';
import {MatCardModule} from '@angular/material/card';
import {  DatePipe} from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  imports: [MatCardModule,DatePipe],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
  standalone:true,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
  deleteRecipe(id: number) {
    if (confirm('Вы уверены, что хотите удалить этот рецепт?')) {
      this.recipeService.removeRecipe(id);
    }
  }
}
