import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class SubscribeService {

    url = 'https://funyjadhav.azurewebsites.net/api/Subscribe?code=aXcNIGgULYiVWc5U6g/aqQT8Upo74pwACoHXGlMnjNyeBxCCABwv6Q==';

    constructor(private http: HttpClient) { }

     httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

    public Subscribe(email : String)
    {
        var body = { email : email}
        this.http.post<Subscriber>(this.url, body, this.httpOptions)
        .subscribe();
    }
    
}

interface Subscriber {
    email: string;
}
