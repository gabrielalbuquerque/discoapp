import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';

import { AppComponent } from './app.component';
import { DiscosComponent } from './discos/discos.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'discos',
    component: DiscosComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DiscosComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
