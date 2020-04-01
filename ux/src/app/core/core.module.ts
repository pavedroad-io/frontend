import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../share/material/material.modules';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [NavigationBarComponent],
  imports: [
		CommonModule,
		MaterialModule,
		LayoutModule
	],
	exports: [
		MaterialModule,
		NavigationBarComponent
	]
})

export class CoreModule { }
