import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
//import { NavComponent } from './nav/nav.component';
//import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent
		//		NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		BrowserAnimationsModule,
		CoreModule
		//		LayoutModule
  ],
  providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
