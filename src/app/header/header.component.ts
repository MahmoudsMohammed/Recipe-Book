import { Component } from '@angular/core';
import { httpService } from '../Shared/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private httpServ: httpService) {}
  onSaveData() {
    this.httpServ.sendData();
  }
}
