import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css']
})
export class ServicesPageComponent implements OnInit {

  constructor() { }
  pageTitle : string = ''; 
  imgUrl : string = ''
  ngOnInit(): void {
    this.pageTitle="Services"
    this.imgUrl = 'assets/img/Landscape1.jpeg'
  }

}
