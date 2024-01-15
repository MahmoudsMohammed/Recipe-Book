import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { recipeService } from '../recipe.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrl: './new-recipe.component.css',
})
export class NewRecipeComponent implements OnInit {
  constructor(
    private actRoute: ActivatedRoute,
    private recipeServ: recipeService
  ) {}
  id: number;
  editMode: boolean = false;
  reactiveForm: FormGroup;
  ngOnInit(): void {
    this.actRoute.params.subscribe((par: Params) => {
      this.id = +par['id'];
      this.editMode = par['id'] != null;
      this.initForm();
    });
  }
  private initForm() {
    let recipeName = '',
      recipeImageUrl = '',
      recipeDescription = '';
    if (this.editMode) {
      recipeName = this.recipeServ.Recipes[this.id].name;
      recipeImageUrl = this.recipeServ.Recipes[this.id].imagePath;
      recipeDescription = this.recipeServ.Recipes[this.id].decripe;
    }
    this.reactiveForm = new FormGroup({
      name: new FormControl(recipeName),
      url: new FormControl(recipeImageUrl),
      descripe: new FormControl(recipeDescription),
    });
  }

  onSubmit() {
    console.log(this.reactiveForm.value);
  }
}
