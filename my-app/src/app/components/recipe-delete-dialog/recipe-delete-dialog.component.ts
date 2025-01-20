import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-recipe-delete-dialog',
  imports: [MatDialogModule],
  templateUrl: './recipe-delete-dialog.component.html',
  styleUrl: './recipe-delete-dialog.component.css',
  standalone:true
})
export class RecipeDeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<RecipeDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { recipeId: string }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
