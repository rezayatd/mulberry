import { Component, OnInit, Input } from '@angular/core';
export interface BreadCrumbsItem{
  name:string
  class:string;
  routerLink:string;
  routerLinkActive:string
} 

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.css']
})
export class BreadCrumbsComponent implements OnInit {
  constructor() { }
  @Input() pageTitle: string='';
  @Input() imgUrl: string='';
  @Input() breadCrumbsItems: BreadCrumbsItem[]=[];
  ngOnInit(): void {

  }

}
