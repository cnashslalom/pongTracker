import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Rx';

import { User } from '../models/user';
import { Game } from '../models/game';

@Injectable()
export class ApiService {

    API_URL: string = "http://localhost:3030"

    constructor(private http: Http) { }

    ////// USERS //////

    getUsers(): Observable<User[]> {
        return this.http.get(this.API_URL + '/user')
        .map((res: Response) => {
            return res.json().map(item => {
                return User.asUser(item);
            });
        })
        .catch((error:any) => Observable.throw(error.json().error || error));
    }

    ////// GAMES ///////

    getAllGames(): Observable<Game[]> {
        return this.http.get(this.API_URL + '/game')
        .map((res: Response) => {
            return res.json().map(item => {
                return Game.asGame(item);
            });
        })
        .catch((error:any) => Observable.throw(error.json().error || error));
    }

    createGame(a1, a2, b1, b2, aScore, bScore, creator, validator): Observable<Game> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let data = {
            a1: a1,
            a2: a2,
            b1: b1,
            b2: b2,
            a_score: aScore,
            b_score: bScore,
            created_user: creator,
            verified_user: validator
        };

        return this.http.post(this.API_URL + "/game", data, options)
            .map((res: Response) => {
                console.log("test");
                console.log(res);
                return Game.asGame(res.json());
            })
            .catch((error:any) => Observable.throw(error))
    }

}

                         
