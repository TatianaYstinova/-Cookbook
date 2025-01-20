import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Recipe } from '../../modules/recipe.model';
import { RecipeService } from '../../recipe.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-recipe',
  imports: [FormsModule],
  templateUrl: './create-recipe.component.html',
  styleUrl: './create-recipe.component.css',
  standalone:true,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CreateRecipeComponent implements OnInit {
  recipe: Recipe = {
    id: 0, //  значение по умолчанию для id
    title: '',
    ingredients: [],
    instructions: '',
    imageUrl: '',
    createdAt: new Date().toISOString()
  };

constructor(private recipeService: RecipeService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  

units = ['г', 'кг', 'л', 'мл', 'шт'];
addIngredient() {
  this.recipe.ingredients.push({ name: '', quantity: 0, unit: this.units[0] });
}

removeIngredient(index: number) {
  this.recipe.ingredients.splice(index, 1);
}

onImageSelected(event: any) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.recipe.imageUrl = e.target?.result as string; // Установите URL картинки
    };
    reader.readAsDataURL(file);
  }
}

onSubmit() {
  this.recipeService.createRecipe({ ...this.recipe, id: this.generateId() });
  this.resetForm();
}

private generateId() {
  return this.recipeService.getRecipes().length + 1; // Генерация id
}

private resetForm() {
  this.recipe = {
    id: 0,
    title: '',
    ingredients: [],
    instructions: '',
    imageUrl: '',
    createdAt: new Date().toISOString()
  };
}
 
}
