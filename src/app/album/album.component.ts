import { Album } from '../Album'
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from './../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  id: string;
  album: Album[];

  constructor(
    private _spotifyService: SpotifyService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params
      .subscribe(params => this.id = params['id']);
    
    this._spotifyService.getAlbum(this.id)
      .subscribe(album => this.album = album);
  }

}
