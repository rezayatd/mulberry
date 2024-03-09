import { Injectable } from '@angular/core';

export interface MenuItem{
  name:string;
  class:string;
  routerLink:string;
  routerLinkActive:string;
  logoUrl:string;
} 

@Injectable({
  providedIn: 'root'
})

export class MenuItemsService {
  menuItems : MenuItem[] = [  
    {name:'Home',         class: '', routerLink: '/home'    , routerLinkActive:'', logoUrl:'../../assets/img/Mulberry AR Logo-Dark3.0.png'},
    {name:'About',        class: '', routerLink: '/about'   , routerLinkActive:'', logoUrl:'../../assets/img/Mulberry AR Logo-Light3.0.png'},
    {name:'Services',     class: '', routerLink: '/services', routerLinkActive:'', logoUrl:'../../assets/img/Mulberry AR Logo-Dark3.0.png'},
    {name:'Projects',     class: '', routerLink: '/projects', routerLinkActive:'', logoUrl:'../../assets/img/Mulberry AR Logo-Black3.0.png'},
    {name:'Contact',      class: '', routerLink: '/contact' , routerLinkActive:'', logoUrl:'../../assets/img/Mulberry AR Logo-Black3.0.png'},
  ]
  getMenuItems() : MenuItem[] {
    return this.menuItems;
  };
  getMenuItem(ndx : number ) : MenuItem {
    return this.menuItems[ndx];
  };
  
  constructor() { }
}


