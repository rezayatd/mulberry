import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroComponent } from './components/intro/intro.component';
import { IntroSlidesComponent } from './components/intro-slides/intro-slides.component';
import { ServicesComponent } from './components/services/services.component';
import { ActionsComponent } from './components/actions/actions.component';
import { BlogComponent } from './components/blog/blog.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BreadCrumbsComponent } from './components/bread-crumbs/bread-crumbs.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesPageComponent } from './components/services-page/services-page.component';
import { AboutIntroComponent } from './components/about-intro/about-intro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarItemComponent } from './components/navbar/navbar-item/navbar-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    IntroSlidesComponent,
    ServicesComponent,
    ActionsComponent,
    BlogComponent,
    FooterComponent,
    HomeComponent,
    BreadCrumbsComponent,
    AboutComponent,
    ServicesPageComponent,
    AboutIntroComponent,
    NavbarComponent,
    NavbarItemComponent
  ],
  imports: [
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
