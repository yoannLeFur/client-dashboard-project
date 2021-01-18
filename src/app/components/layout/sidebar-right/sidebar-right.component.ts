import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-sidebar-right',
  templateUrl: './sidebar-right.component.html',
  styleUrls: ['./sidebar-right.component.scss']
})
export class SidebarRightComponent implements OnInit {

  @Input() subMenuState;
  constructor() { }
  opened: boolean;
  showMenu = true;

  ngOnInit() {
  }

  ngOnChanges(){
    console.log("inside ngOnChanges with subMenuState: ",this.subMenuState );
    this.showMenu = this.subMenuState;
  }
}
