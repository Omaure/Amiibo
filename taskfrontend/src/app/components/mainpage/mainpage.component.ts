import {AfterViewInit, Component, OnInit} from '@angular/core';
import {GameserviceService} from '../../services/gameservice.service';
import * as M from 'materialize-css';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit, AfterViewInit {
  pagesNo: Array<number>;
  gamesNo: number;
  Games: object;

  UpdateGames(pageNumber) {
    this.service.getGames(pageNumber).subscribe((Games) => {
      this.Games = Games;
    });
  }

  SearchGames(searchQuery) {
    if (searchQuery === '') {
      searchQuery = null;
    }
    this.service.getSearch(searchQuery).subscribe((Games) => {
      this.Games = Games;
      this.UpdateGamesNumber(searchQuery);
    });
  }

  UpdateGamesNumber(searchQuery) {
    this.service.getnumberofSearchedGames(searchQuery).subscribe((Games) => {
      this.gamesNo = Games;
    });
  }

  constructor(private service: GameserviceService) {
  }

  ngOnInit(): void {

    this.service.getNumberofPages().subscribe((pages) => {
      this.pagesNo = Array.from({length: pages}, (_, i) => i);
    });
    this.service.getGames(1).subscribe((Games) => {
      this.Games = Games;
    });
    this.service.getnumberofGames().subscribe((gamesNo) => {
      this.gamesNo = gamesNo;
    });
  }

  ngAfterViewInit(): void {
    // tslint:disable-next-line:only-arrow-functions
    setTimeout(function() {
      const elem = document.querySelector('.sidenav');
      const instance = M.Sidenav.init(elem, {
        edge: 'left',
        draggable: true,
        inDuration: 250,
        outDuration: 200,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null,
        preventScrolling: true
      });
    }, 0);
  }

}
