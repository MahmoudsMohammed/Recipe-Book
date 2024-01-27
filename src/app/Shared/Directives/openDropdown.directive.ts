import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[openDrop]',
})
export class openDropDown {
  constructor(private El: ElementRef, private renderer: Renderer2) {}
  @HostListener('document : click', ['$event']) onClick(e: Event) {
    if (this.El.nativeElement === e.target || this.El.nativeElement === (e.target as HTMLElement).parentElement) {
      if (
        !this.El.nativeElement.nextElementSibling.classList.contains('show')
      ) {
        this.renderer.addClass(
          this.El.nativeElement.nextElementSibling,
          'show'
        );
      } else {
        this.renderer.removeClass(
          this.El.nativeElement.nextElementSibling,
          'show'
        );
      }
    } else {
      this.renderer.removeClass(
        this.El.nativeElement.nextElementSibling,
        'show'
      );
    }
  }
}
