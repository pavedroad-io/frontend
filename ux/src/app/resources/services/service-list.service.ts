import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface IserviceResponse {
	id: string;
	type: string;
	key: string;
	releaseStatus: string;
	version: string;
	description: string;
	enable: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class ServiceListService {
	private url: string = 'https://localhost/api/v1/namespace/pavedroad.io/services';
	//private url: string = 'https://api.pavedroad.io/api/v1/namespace/pavedroad.io/services';
  private idurl: string = this.url + '/';

	data: Array<IserviceResponse> = [
		{ id: "1", type: "ms", key: "datamgr", releaseStatus: "ga", version: "1.0.0alpha", description: "Data manager", enable: true },
		{ id: "2", type: "ms", key: "workerPool", releaseStatus: "ga", version: "1.0.0alpha", description: "Worker pool", enable: true },
		{ id: "3", type: "ms", key: "service", releaseStatus: "ga", version: "1.0.0alpha", description: "Service end point", enable: true },
		{ id: "4", type: "crd", key: "CRD", releaseStatus: "ga", version: "1.0.0alpha", description: "Kubernetes CRD", enable: true },
		{ id: "5", type: "faas", key: "open_faas", releaseStatus: "ga", version: "1.0.0alpha", description: "Open FaaS function", enable: true },
		{ id: "6", type: "faas", key: "knative", releaseStatus: "ga", version: "1.0.0alpha", description: "Knative function", enable: true }
	];

	constructor(private http: HttpClient) { 
	}

 private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) { // A client-side or network error.
     console.error('An error occurred:', error.error.message);
		} else { // Backend response errors
     console.error(
       `Backend returned code ${error.status}, ` +
       `body was: ${error.error}`);
   }

  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
  };

  getServices() {
		return this.data;
		// return this.http.get<Array<IserviceResponse>>(this.url, { observe: 'response' });
    //  .subscribe( error => {
    //    console.log(this);
    //});
  }

  createService(post: IserviceResponse) {
    return this.http.post<IserviceResponse>(this.url, JSON.stringify(post));
  }

  updateService(post: IserviceResponse) {
    return this.http.put<IserviceResponse>(this.idurl+post.id, JSON.stringify(post));
  }

  deletePost(post: IserviceResponse) {
    return this.http.delete<IserviceResponse>(this.idurl+post.id)
      .pipe(catchError(this.handleError));
  }
}
