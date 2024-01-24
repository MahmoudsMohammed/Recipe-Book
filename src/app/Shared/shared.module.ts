import { NgModule } from '@angular/core';
import { openDropDown } from './Directives/openDropdown.directive';
import { alertComponent } from './alert/alert.component';
import { helperDirective } from './helper.directive';
import { spinnerComponent } from './spinner/spinner-component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    openDropDown,
    spinnerComponent,
    alertComponent,
    helperDirective,
  ],
  imports: [CommonModule],
  exports: [
    openDropDown,
    spinnerComponent,
    alertComponent,
    helperDirective,
    CommonModule,
  ],
})
export class sharedModule {}
