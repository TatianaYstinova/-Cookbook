import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: RecipeListComponent },
    { path: 'recipe/:id', component: RecipeDetailComponent },
    { path: 'create-recipe', component: CreateRecipeComponent },
    {path:'list',component:RecipeListComponent}
  ];

  
  
  
