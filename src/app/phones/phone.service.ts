import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";

import { IPhone } from "./phone";

@Injectable({
    providedIn: 'root'
})
export class PhoneService {
    private phonesUrl = 'api/phones/phones.json';

    public phones: IPhone[];

    constructor(private http:HttpClient){}

    getPhones(): Observable<IPhone[]> {
        const self = this;

        return this.http.get<IPhone[]>(this.phonesUrl).pipe(
            tap(function(data){
                self.phones = data;        
            }),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse){
        return throwError('Server error!');
    }
}

