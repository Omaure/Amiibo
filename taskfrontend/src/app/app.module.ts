import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainpageComponent} from './components/mainpage/mainpage.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent, MainpageComponent]
})
export class AppModule {
}
