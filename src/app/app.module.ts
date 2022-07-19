import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BeerListComponent } from './component/beer-list/beer-list.component';
import { AppRoutingModule } from './model/app-routing/app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, BeerListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
