import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AlertService {

    constructor(private http: Http) { }

    getAlerts() {
        return this.http.get('app/alerts.json')
            .map((res: Response) => res.json());
        
        // return [
        //     { 'id': 1, 'name': 'Appartements Annemasse', 'url': 'https://www.leboncoin.fr', 'distance_limit': 0 },
        //     { 'id': 2, 'name': 'Scalextric', 'url': 'https://www.leboncoin.fr', 'distance_limit': 0 }
        // ]
    }

}