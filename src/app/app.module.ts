import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import {MatMenuModule} from '@angular/material/menu';

import { DemoMaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';

import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'prodduct', component: ProductListComponent },
    ]),
    DemoMaterialModule, //importing all Material Modules
    // MatSlideToggleModule,
    // MatMenuModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    FooterComponent,
    HomeComponent,
    HeadComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
