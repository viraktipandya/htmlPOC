import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent

 },
 {
  path:'contact',
  component: ContactComponent

},
{
  path:'about',
  component: AboutComponent

},
{
  path:'service',
  component: ServiceComponent

},
{
  path:'help',
  component: HelpComponent

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
