import { NgModule } from '@angular/core';
import { AppComponent } from './app.component'
import { WelcomePageComponent } from './welcome-page/welcome-page.component'
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: 'login', component :AppComponent},
  { path: 'welcome', component: WelcomePageComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
