import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  searchUrl: string;
  artistUrl: string;

  constructor(private _http: Http) { }

  searchMusic(str: string, type:string = 'artist') {
  /*TODO: implement service that dismiss previous requests */
    if(str !== '') {
      this.searchUrl = `https://api.spotify.com/v1/search?query=${str}&offset=0&limit=20&type=${type}&market=US`;
      return this._http.get(this.searchUrl)
        .map(res => res.json());
    }
  }

  getArtist(id:string) {
    this.artistUrl = `https://api.spotify.com/v1/artists/${id}`
    return this._http.get(this.artistUrl)
      .map(res => res.json())
  }

}
