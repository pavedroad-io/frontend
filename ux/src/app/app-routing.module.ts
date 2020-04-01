import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { SocialLoginComponent } from './core/components/social-login/social-login.component';
import { AppComponent } from './app.component';
//import { NavComponent } from './nav/nav.component';
//import { LoginSocialComponent } from './login/login-social/login-social.component';


const routes: Routes = [
	{ path: 'login', component: SocialLoginComponent },
	{ path: '', redirectTo: '/login', pathMatch: 'full'}
	//	{ path: '/home', component: AppComponent },
]
//const routes: Routes = [
//	{ path: '/home', component: NavComponent },
//	{ path: '', redirectTo: '/home', pathMatch: 'full'}
//]


@NgModule({
	imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
