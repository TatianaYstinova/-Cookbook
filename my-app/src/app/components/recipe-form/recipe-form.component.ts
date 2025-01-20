import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { RecipeService } from '../../recipe.service';
import { Recipe } from '../../modules/recipe.model';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


@Component({
  selector: 'app-recipe-form',
  imports: [MatFormFieldModule,MatSelectModule,ReactiveFormsModule],
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.css'
})
export class RecipeFormComponent implements OnInit{
  recipeForm: FormGroup;
  units: string[] = ['g', 'kg', 'ml', 'l', 'tsp', 'tbsp', 'cup'];

  constructor(
    private fb: FormBuilder,
    private recipeService: RecipeService,
    private dialogRef: MatDialogRef<RecipeFormComponent>
  ) {
    this.recipeForm = this.fb.group({
      title: ['', Validators.required],
      ingredients: this.fb.array([]),
      instructions: ['', Validators.required],
      imageUrl: ['']
    });
  }

  ngOnInit(): void {
    this.addIngredient();
  }

  get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  addIngredient(): void {
    this.ingredients.push(this.fb.group({
      name: ['', Validators.required],
      quantity: ['', Validators.required],
      unit: ['', Validators.required]
    }));
  }

  removeIngredient(index: number): void {
    this.ingredients.removeAt(index);
  }

  onSubmit(): void {
    if (this.recipeForm.valid) {
      const newRecipe: Recipe = {
        id: Math.random().toString(36).substr(2, 9),
        ...this.recipeForm.value,
        createdAt: new Date()
      };
      this.recipeService.createRecipe(newRecipe);
      this.dialogRef.close();
    }
  }
}
