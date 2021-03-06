import { Album } from './../Album';
import { Artist } from './../Artist';
import { SpotifyService } from './../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  id: string;
  artist: Artist;
  albums: Album[];

  constructor(
    private _spotifyService: SpotifyService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params
      .subscribe(params => this.id = params['id']);
    
    this._spotifyService.getArtist(this.id)
      .subscribe(artist => this.artist = artist);
    
    this._spotifyService.getAlbums(this.id)
      .subscribe(albums => this.albums = albums.items);
  }

}
