import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { MenuItem, MenuItemsService } from 'src/app/services/menu-items/menu-items.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html', 
  styleUrls: ['./navbar.component.css'],
  providers: [ MenuItemsService]
})


export class NavbarComponent implements OnInit {
    
  @Input() menuItems: MenuItem[]=[]; 

  ngOnChanges(changes: SimpleChanges){
      console.log(changes)
      console.log(this.menuItems);
  }
  ngOnInit(): void {
        

  }
}
