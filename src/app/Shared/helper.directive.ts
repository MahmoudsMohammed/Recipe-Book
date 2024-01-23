import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[placeholder]',
})
export class helperDirective {
  constructor(public viewContainer: ViewContainerRef) {}
}
