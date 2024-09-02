import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesPageComponent } from './components/services-page/services-page.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },  
  {path: 'home', component: HomeComponent },
  {path: 'services', component: ServicesPageComponent },
  {path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 


}
