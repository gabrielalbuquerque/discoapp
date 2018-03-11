import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl } from '@angular/forms';
import {Routes, RouterModule, Router} from '@angular/router';

import { AppComponent } from './app.component';
import { DiscosComponent } from './discos/discos.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AddDiscoComponent } from './add-disco/add-disco.component';
import { SearchDiscoComponent } from './search-disco/search-disco.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'addDisco',
    component: AddDiscoComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'searchDisco/:searchChar',
    component: SearchDiscoComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DiscosComponent,
    HomeComponent,
    HeaderComponent,
    AddDiscoComponent,
    SearchDiscoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
