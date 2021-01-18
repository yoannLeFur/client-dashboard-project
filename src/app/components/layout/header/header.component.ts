import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() menuState = new EventEmitter();

  constructor() { }
  opened: boolean;
  showMenu = false; /* false by default, since hidden */
  toggleMenu() {
    console.log("inside toggleMenu");
    this.showMenu = !this.showMenu;
    this.menuState.emit(this.showMenu);
  }
  ngOnInit() {
  }

}
