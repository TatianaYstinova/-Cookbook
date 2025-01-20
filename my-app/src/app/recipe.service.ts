import { Injectable } from '@angular/core';
import { Recipe } from './modules/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    {
      id: 1,
  title: "Паста с томатным соусом",
  ingredients: [
    { name: "Паста", quantity: 200, unit: "г" },
    { name: "Томаты", quantity: 400, unit: "г" },
    { name: "Чеснок", quantity: 2, unit: "зубчика" },
    { name: "Оливковое масло", quantity: 2, unit: "ст. ложки" },
    { name: "Соль", quantity: 1, unit: "ч. ложка" },
    { name: "Перец", quantity: 0.5, unit: "ч. ложка" },
    { name: "Базилик", quantity: 1, unit: "ч. ложка" }
  ],
  instructions: "Отварите пасту до состояния аль денте. В сковороде разогрейте оливковое масло, добавьте чеснок и обжарьте до золотистого цвета. Добавьте нарезанные томаты, соль, перец и базилик. Тушите 10 минут. Смешайте с пастой и подавайте.",
  imageUrl: "https://avatars.dzeninfra.ru/get-zen_doc/2453078/pub_604b9cc76c861f0107d9c770_604ba89d6c861f0107ef8e42/scale_1200",
  createdAt: '12/01/2024'
    },
    {
      id: 2,
  title: "Овощной салат",
  ingredients: [
    { name: "Помидоры", quantity: 2, unit: "шт." },
    { name: "Огурцы", quantity: 1, unit: "шт." },
    { name: "Перец болгарский", quantity: 1, unit: "шт." },
    { name: "Лук", quantity: 1, unit: "шт." },
    { name: "Оливковое масло", quantity: 3, unit: "ст. ложки" },
    { name: "Соль", quantity: 0.5, unit: "ч. ложка" },
    { name: "Уксус", quantity: 1, unit: "ст. ложка" }
  ],
  instructions: "Нарежьте все овощи кубиками. Смешайте в салатнице, добавьте оливковое масло, уксус и соль. Перемешайте и подавайте.",
  imageUrl: "https://example.com/salad.jpg",
  createdAt: '23/04/2024f'
    },
    {
      id: 24,
      title: "Салат Цезарь",
      ingredients: [
        { name: "Листья салата", quantity: 150, unit: "г" },
        { name: "Куриное филе", quantity: 200, unit: "г" },
        { name: "Пармезан", quantity: 50, unit: "г" },
        { name: "Гренки", quantity: 50, unit: "г" },
        { name: "Соус Цезарь", quantity: 3, unit: "ст. ложки" },
        { name: "Соль", quantity: 1, unit: "щепотка" },
        { name: "Перец", quantity: 1, unit: "щепотка" },
      ],
      instructions: "Отварите куриное филе, нарежьте кубиками. В глубокой миске смешайте листья салата, курицу, гренки и пармезан. Заправьте соусом Цезарь, добавьте соль и перец по вкусу.",
      imageUrl: "https://example.com/caesar_salad.jpg",
      createdAt: new Date().toISOString(),
    },
    {
      id: 3,
      title: "Омлет с овощами",
      ingredients: [
        { name: "Яйца", quantity: 3, unit: "шт." },
        { name: "Молоко", quantity: 50, unit: "мл" },
        { name: "Перец болгарский", quantity: 1, unit: "шт." },
        { name: "Помидор", quantity: 1, unit: "шт." },
        { name: "Лук", quantity: 1, unit: "шт." },
        { name: "Соль", quantity: 1, unit: "щепотка" },
        { name: "Перец", quantity: 1, unit: "щепотка" },
        { name: "Масло растительное", quantity: 1, unit: "ст. ложка" },
      ],
      instructions: "Взбейте яйца с молоком, добавьте соль и перец. Обжарьте нарезанные овощи на растительном масле, затем влейте яичную смесь. Готовьте на среднем огне до готовности.",
      imageUrl: "https://example.com/vegetable_omelette.jpg",
      createdAt: new Date().toISOString(),
    },
    {
      id: 4,
      title: "Курица в медово-соевом соусе",
      ingredients: [
        { name: "Куриные грудки", quantity: 500, unit: "г" },
        { name: "Соевый соус", quantity: 4, unit: "ст. ложки" },
        { name: "Мед", quantity: 2, unit: "ст. ложки" },
        { name: "Чеснок", quantity: 3, unit: "зубчика" },
        { name: "Имбирь", quantity: 1, unit: "ч. ложка" },
        { name: "Соль", quantity: 1, unit: "щепотка" },
        { name: "Перец", quantity: 1, unit: "щепотка" },
      ],
      instructions: "Смешайте соевый соус, мед, измельченный чеснок и имбирь. Замаринуйте курицу в этой смеси на 30 минут. Обжарьте курицу на сковороде до золотистой корочки.",
      imageUrl: "https://example.com/chicken_honey_soy.jpg",
      createdAt: new Date().toISOString(),
    },
    {
      id: 5,
      title: "Блины с ягодами",
      ingredients: [
        { name: "Мука", quantity: 200, unit: "г" },
        { name: "Яйца", quantity: 2, unit: "шт." },
        { name: "Молоко", quantity: 500, unit: "мл" },
        { name: "Сахар", quantity: 2, unit: "ст. ложки" },
        { name: "Соль", quantity: 1, unit: "щепотка" },
        { name: "Ягоды (по выбору)", quantity: 150, unit: "г" },
        { name: "Масло растительное", quantity: 2, unit: "ст. ложки" },
      ],
      instructions: "Смешайте муку, яйца, молоко, сахар и соль до однородной массы. Жарьте блины на растительном масле с обеих сторон до золотистой корочки. Подавайте с ягодами.",
      imageUrl: "https://example.com/berry_crepes.jpg",
      createdAt: new Date().toISOString(),
    },
    {
      id: 6,
      title: "Запеченные картофельные дольки",
      ingredients: [
        { name: "Картофель", quantity: 600, unit: "г" },
        { name: "Оливковое масло", quantity: 3, unit: "ст. ложки" },
        { name: "Соль", quantity: 1, unit: "щепотка" },
        { name: "Перец", quantity: 1, unit: "щепотка" },
        { name: "Паприка", quantity: 1, unit: "ч. ложка" },
        { name: "Чеснок", quantity: 2, unit: "зубчика" },
      ],
      instructions: "Нарежьте картофель дольками и смешайте с оливковым маслом, солью, перцем, паприкой и измельченным чесноком. Разложите на противне и запекайте при 200°C 30-40 минут.",
      imageUrl: "https://example.com/baked_potato_wedges.jpg",
      createdAt: new Date().toISOString(),
    },
    {
      id: 7,
      title: "Шоколадный торт",
      ingredients: [
        { name: "Мука", quantity: 250, unit: "г" },
        { name: "Сахар", quantity: 200, unit: "г" },
        { name: "Какао-порошок", quantity: 50, unit: "г" },
        { name: "Яйца", quantity: 3, unit: "шт." },
        { name: "Молоко", quantity: 100, unit: "мл" },
        { name: "Масло растительное", quantity: 100, unit: "мл" },
        { name: "Разрыхлитель теста", quantity: 1, unit: "ч. ложка" },
        { name: "Соль", quantity: 1, unit: "щепотка" },
      ],
      instructions: "Смешайте все сухие ингредиенты, затем добавьте яйца, молоко и масло. Взбейте до однородности. Вылейте в форму и выпекайте при 180°C 30-35 минут.",
      imageUrl: "https://example.com/chocolate_cake.jpg",
      createdAt: new Date().toISOString(),
    },
    {
      id: 8,
      title: "Суп-пюре из тыквы",
      ingredients: [
        { name: "Тыква", quantity: 500, unit: "г" },
        { name: "Лук", quantity: 1, unit: "шт." },
        { name: "Морковь", quantity: 1, unit: "шт." },
        { name: "Чеснок", quantity: 2, unit: "зубчика" },
        { name: "Бульон овощной", quantity: 1, unit: "л" },
        { name: "Соль", quantity: 1, unit: "щепотка" },
        { name: "Перец", quantity: 1, unit: "щепотка" },
        { name: "Сливки", quantity: 100, unit: "мл" },
      ],
      instructions: "Обжарьте лук, морковь и чеснок до мягкости. Добавьте нарезанную тыкву и бульон, готовьте 20 минут. Измельчите блендером до состояния пюре, добавьте сливки, соль и перец.",
      imageUrl: "https://example.com/pumpkin_soup.jpg",
      createdAt: new Date().toISOString(),
    },
    {
      id: 9,
      title: "Рис с овощами",
      ingredients: [
        { name: "Рис", quantity: 200, unit: "г" },
        { name: "Брокколи", quantity: 100, unit: "г" },
        { name: "Морковь", quantity: 1, unit: "шт." },
        { name: "Перец болгарский", quantity: 1, unit: "шт." },
        { name: "Соевый соус", quantity: 3, unit: "ст. ложки" },
        { name: "Соль", quantity: 1, unit: "щепотка" },
        { name: "Перец", quantity: 1, unit: "щепотка" },
        { name: "Масло растительное", quantity: 1, unit: "ст. ложка" },
      ],
      instructions: "Отварите рис. На сковороде обжарьте нарезанные овощи на растительном масле, добавьте готовый рис, соевый соус, соль и перец. Перемешайте и готовьте еще 5 минут.",
      imageUrl: "https://example.com/rice_vegetables.jpg",
      createdAt: new Date().toISOString(),
    },
    {
      id: 10,
      title: "Фруктовый салат",
      ingredients: [
        { name: "Яблоко", quantity: 1, unit: "шт." },
        { name: "Банан", quantity: 1, unit: "шт." },
        { name: "Апельсин", quantity: 1, unit: "шт." },
        { name: "Киви", quantity: 1, unit: "шт." },
        { name: "Йогурт", quantity: 150, unit: "г" },
        { name: "Мед", quantity: 1, unit: "ст. ложка" },
      ],
      instructions: "Нарежьте все фрукты кубиками, смешайте с йогуртом и медом. Подавайте охлажденным.",
      imageUrl: "https://example.com/fruit_salad.jpg",
      createdAt: new Date().toISOString(),
    },
  ];

  constructor() { }

  getRecipes(): Recipe[] {
    return this.recipes;
  }

  getRecipe(id:number): Recipe | undefined {
    return this.recipes.find(recipe => recipe.id === id);
  }

  createRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
  }

  updateRecipe(id: number, updatedRecipe: Recipe): void {
    const index = this.recipes.findIndex(recipe => recipe.id === id);
    if (index !== -1) {
      this.recipes[index] = updatedRecipe;
    }
  }

  removeRecipe(id: number): void {
    this.recipes = this.recipes.filter(recipe => recipe.id !== id);
  }
}
