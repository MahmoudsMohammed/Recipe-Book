import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrl: './new-recipe.component.css',
})
export class NewRecipeComponent implements OnInit {
  constructor(private actRoute: ActivatedRoute) {}
  id: number;
  editMode: boolean = false;
  ngOnInit(): void {
    this.actRoute.params.subscribe((par: Params) => {
      this.id = par['id'];
      this.editMode = par['id'] != null;
    });
  }
}
