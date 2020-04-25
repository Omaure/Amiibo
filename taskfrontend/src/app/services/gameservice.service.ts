import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameserviceService {

  constructor(private http: HttpClient) {
  }

  getNumberofPages(): any {
    return this.http.get('http://localhost:4000/games/maxpages');
  }

  getGames(pageNo): any {
    return this.http.get(`http://localhost:4000/games/${pageNo}`);
  }

  getnumberofGames(): any {
    return this.http.get(`http://localhost:4000/games/numberofgames`);
  }

  getSearch(query): any {
    return this.http.get(`http://localhost:4000/games/search/${query}`);
  }

  getnumberofSearchedGames(query): any {
    return this.http.get(`http://localhost:4000/games/searchedgames/${query}`);
  }
}
