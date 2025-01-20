import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router,RouterOutlet} from '@angular/router';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { BehaviorSubject } from 'rxjs';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RecipeListComponent,MatIconModule,MatMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:true,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(private router: Router){}
  isShow = new BehaviorSubject<boolean>(true);
  sss(){
    this.router.navigate(['create-recipe']);
    this.isShow.next(false)
  }
}
