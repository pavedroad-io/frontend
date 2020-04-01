import { Component, OnInit } from '@angular/core';
import { GitHubAuthService, PRAuthResponse } from '../services/git-hub-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {
	hide = true;
	username: string = "";
	password: string = "";

	constructor(private service: GitHubAuthService,
	            private router: Router) {
	}

  ngOnInit(): void {
  }

	login() {
		this.service.authCheck(this.username, this.password)
			.subscribe(
				resp => {
				// TODO add service to save token
			  this.router.navigate(['/dashboard']);
			},
			(error: Response) => {
				const msg = <PRAuthResponse><unknown> error;
				if ( msg.authorized === true ) {
				  this.router.navigate(['/dashboard']);
				}
      });
  }
}
