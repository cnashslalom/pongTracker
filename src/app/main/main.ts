import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { User } from '../models/user';
import { Game } from '../models/game';

import { ApiService } from '../shared/api.service'

@Component({
  selector: 'fountain-app',
  template: require('./main.html')
})
export class MainComponent {
	games: Game[];
	game: Game;

	constructor(private route: ActivatedRoute,
	            private router: Router,
	            private apiService: ApiService) {
	}

	ngOnInit(): void {
		this.game = new Game();
		this.apiService.getAllGames().subscribe(
			games => {
				this.games = games;
				console.log(this.games);
			},
			err => {
				console.error(err);
			}
		);
	}

	createGame() {
		this.apiService.createGame("me3", null, "you3", null, "10", "11", "me3", "them").subscribe(
			game => {
				this.games.push(game);	
			},
			err => {
				console.log(err);
			}
		);
	}

}
