import { Component, OnInit } from '@angular/core';
import { BreadCrumbsItem } from '../bread-crumbs/bread-crumbs.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor() { 
   
  }
  pageTitle : string=''; 
  imgUrl : string = ''
  ndx:number=1; 
  breadCrumbsItems : BreadCrumbsItem[]=[]
  
  ngOnInit(): void {
    this.pageTitle="About"
    this.imgUrl = 'assets/img/Landscape-Design1.jpeg'
    this.breadCrumbsItems = [
      {name:'Home',         class: '', routerLink: '/home'    , routerLinkActive:''},
    ];
  }

}
