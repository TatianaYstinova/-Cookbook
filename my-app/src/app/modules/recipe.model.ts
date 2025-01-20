export interface Recipe {
[x: string]: any;
    id: number;
    title: string;
    ingredients: Ingredient[];
    instructions: string;
    imageUrl: string;
    createdAt: string;
  }
  
  export interface Ingredient {
    name: string;
    quantity: number;
    unit: string;
  }
  
  