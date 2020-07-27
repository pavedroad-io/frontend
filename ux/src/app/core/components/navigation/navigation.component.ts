import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
	developmentMenuItems = [
		{title: "Manage services", icon: "code", route: ""},
		{title: "View tests", icon: "bug_report", route: ""},
		{title: "View artifacts", icon: "folder", route: ""},
		{title: "Manage templates", icon: "extension", route: ""},
		{title: "Security reports", icon: "security", route: ""}
	];

	toolNetworkMenuItems = [
		{title: "Manage builders", icon: "build", route: ""},
		{title: "Manage environments", icon: "wb_cloudy", route: ""},
		{title: "Manage integrations", icon: "settings_input_composite", route: ""},
		{title: "Manage providers", icon: "supervisor_account", route: ""},
		{title: "Manage tagging", icon: "label", route: ""},
		{title: "Manage tests", icon: "view_list", route: ""},
		{title: "Security reports", icon: "security", route: ""}
	];

	deploymentMenuItems = [
		{title: "Start new deployment", icon: "flight_takeoff", route: ""},
		{title: "Manage/view a deployment", icon: "pageview", route: ""},
		{title: "Deployment history", icon: "history", route: ""},
		{title: "Security reports", icon: "security", route: ""}
	];

	operationsMenuItems = [
		{title: "Application monitoring", icon: "apps", route: ""},
		{title: "Nework monitoring", icon: "network_check", route: ""},
		{title: "Security monitoring", icon: "security", route: ""},
		{title: "Infrastructur monitoring", icon: "apartment", route: ""},
		{title: "Costs dashboard", icon: "attach_money", route: ""},
		{title: "Peformance dashboard", icon: "speed", route: ""},
		{title: "Incident management", icon: "report_problem", route: ""},
		{title: "History", icon: "change_history", route: ""},
		{title: "Projections", icon: "trending_up", route: ""},
		{title: "Security reports", icon: "security", route: ""}
	];

	public APP_TOOLBAR_TITLE = "Components";
	// Use the name of the variable created in the template
	// Rename this right and left side nav
	@ViewChild('navigationSidenav', {static: true})
	public sidenav: MatSidenav;

  constructor(private router: Router) {}

	toggle() {
		this.sidenav.toggle();
	}

	public openNewServiceWizard() {
		this.toggle();
		 this.router.navigate(['wizard']);
	}

}
