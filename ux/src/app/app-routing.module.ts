import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { SocialLoginComponent } from './core/components/social-login/social-login.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
	{ path: 'login', component: SocialLoginComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: '', redirectTo: '/login', pathMatch: 'full'}
]

@NgModule({
	imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
