import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
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
      recipeDescription = '',
      recipeIngredient = new FormArray([]);
    if (this.editMode) {
      recipeName = this.recipeServ.Recipes[this.id].name;
      recipeImageUrl = this.recipeServ.Recipes[this.id].imagePath;
      recipeDescription = this.recipeServ.Recipes[this.id].decripe;
      if (this.recipeServ.Recipes[this.id].ingred) {
        for (let ingred of this.recipeServ.Recipes[this.id].ingred) {
          recipeIngredient.push(
            new FormGroup({
              name: new FormControl(ingred.name),
              amount: new FormControl(ingred.amount),
            })
          );
        }
      }
    }
    this.reactiveForm = new FormGroup({
      name: new FormControl(recipeName),
      url: new FormControl(recipeImageUrl),
      descripe: new FormControl(recipeDescription),
      ingred: recipeIngredient,
    });
  }

  get Controls() {
    return (this.reactiveForm.get('ingred') as FormArray).controls;
  }

  onSubmit() {
    console.log(this.reactiveForm.value);
  }
}
