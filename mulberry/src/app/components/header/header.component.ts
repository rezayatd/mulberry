import { Component, OnInit, Input, SimpleChanges} from '@angular/core';
import { Router, NavigationStart} from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MenuItem, MenuItemsService } from '@services/menu-items/menu-items.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ MenuItemsService]
})

export class HeaderComponent implements OnInit {
 
  menuItems : MenuItem[]; 
  logoUrl : string = '';
  navStart: Observable<NavigationStart>;  
  constructor(public mIServic : MenuItemsService, private router: Router) {
    this.menuItems = mIServic.getMenuItems(); 
    this.navStart = router.events.pipe(
      filter(evt => evt instanceof NavigationStart)
    )  as Observable<NavigationStart>;
  }
  
  ngOnInit(): void {  
      let anyActiveMenu : Boolean = false;
      this.navStart.subscribe(navStart => {
      for (let item of this.menuItems) {
        if (item.routerLink == navStart.url){
          this.setMenuItemActive(item); 
          this.logoUrl = this.getlogoUrl(item)
          anyActiveMenu=true; 
        }else{
          this.setMenuItemInactive(item); 
        }
        if (!anyActiveMenu) {
          this.setMenuItemActive(this.menuItems[0]); 
          this.logoUrl = this.menuItems[0].logoUrl;
        }
      }
    });
  
  }
  
  private setMenuItemActive( mi: MenuItem){
    mi.class = 'active';
    mi.routerLinkActive = 'active';
    return mi;
  };

  private setMenuItemInactive(mi: MenuItem ){
    mi.class = '';
    mi.routerLinkActive = '';
    return mi;
  };
  private getlogoUrl(mi:MenuItem):string{
    
    return mi.logoUrl
  }
}
