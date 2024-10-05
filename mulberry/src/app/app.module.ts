import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { HeaderComponent } from '@components/header/header.component';
import { IntroComponent } from '@components/intro/intro.component';
import { ServicesComponent } from '@components/services/services.component';
import { FooterComponent } from '@components/footer/footer.component';
import { HomeComponent } from '@components/home/home.component';
import { BreadCrumbsComponent } from '@components/bread-crumbs/bread-crumbs.component';
import { ServicesPageComponent } from '@components/services-page/services-page.component';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { NavbarItemComponent } from '@components/navbar/navbar-item/navbar-item.component';
import { ContactComponent } from '@components/contact/contact.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    ServicesComponent,
    FooterComponent,
    HomeComponent,
    BreadCrumbsComponent,
    ServicesPageComponent,
    ContactComponent, 
    NavbarComponent,
    NavbarItemComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
