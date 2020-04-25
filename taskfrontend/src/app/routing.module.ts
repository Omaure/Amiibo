import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainpageComponent} from './components/mainpage/mainpage.component';


const routes: Routes = [
  {path: 'home', component: MainpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
