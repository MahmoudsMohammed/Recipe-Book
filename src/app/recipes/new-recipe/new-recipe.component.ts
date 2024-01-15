import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
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
    // determine the mode 
    this.actRoute.params.subscribe((par: Params) => {
      this.id = +par['id'];
      this.editMode = par['id'] != null;
      this.initForm();
    });
  }

  // function create reactive form
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
              name: new FormControl(ingred.name, Validators.required),
              amount: new FormControl(ingred.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          );
        }
      }
    }
    this.reactiveForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      url: new FormControl(recipeImageUrl, Validators.required),
      descripe: new FormControl(recipeDescription, Validators.required),
      ingred: recipeIngredient,
    });
  }

  // add new ingredient
  onAddIngredient() {
    (this.reactiveForm.get('ingred') as FormArray).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }

  // get contorls from form array to loop over 
  get Controls() {
    return (this.reactiveForm.get('ingred') as FormArray).controls;
  }

  onSubmit() {
    console.log(this.reactiveForm.value);
  }
}
