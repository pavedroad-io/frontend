import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
	public APP_TOOLBAR_TITLE = "Components";
	// Use the name of the variable created in the template
	// Rename this right and left side nav
	@ViewChild('navigationSidenav', {static: true})
	public sidenav: MatSidenav;

  constructor() {}

	toggle() {
		this.sidenav.toggle();
	}
}
