import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LastfmService } from '../../services/lastfm.service';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  top: any[];

  constructor( private _activatedRoute: ActivatedRoute,
               private _LastFM: LastfmService ) { }

  ngOnInit() {
    this._activatedRoute.params
      .map( params => params['id'])
      .subscribe( id => {

        this._LastFM.getArtist(id).subscribe(artist => {
          console.log(artist);
          this.artist = artist;
        });

        this._LastFM.getTop(id).subscribe(top => {
          console.log(top);
          this.top = top;
        });

      });
  }

}
