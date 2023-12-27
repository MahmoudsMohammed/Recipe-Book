import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() selectedSection = new EventEmitter<string>();
  onSelectSection($sec: HTMLElement) {
    this.selectedSection.emit($sec.id);
  }
}
