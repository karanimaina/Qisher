import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {BlogComponent} from "./components/blog/blog.component";
import {BlogDetailsComponent} from "./components/blog-details/blog-details.component";
import {ServicesComponent} from "./components/services/services.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'nav',component:NavigationComponent},
  {path:'blog',component:BlogComponent},
  {path:'blog-details',component:BlogDetailsComponent},
  {path:'services',component:ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
