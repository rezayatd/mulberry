import { Component, OnInit, Input} from '@angular/core';
import { MenuItem } from 'src/app/services/menu-items/menu-items.service';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.css']
})
export class NavbarItemComponent implements OnInit {
  
  @Input() menuItem :MenuItem = {name:'',      class: '', routerLink: '' , routerLinkActive:'', logoUrl:''};
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
