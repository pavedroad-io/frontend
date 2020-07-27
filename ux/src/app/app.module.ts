import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { ResourcesModule } from './resources/resources.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
		AppComponent,
		DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		BrowserAnimationsModule,
		CoreModule,
		ResourcesModule,
		MatGridListModule,
		MatCardModule,
		MatMenuModule,
		MatIconModule,
		MatButtonModule,
		LayoutModule
	],
  providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
