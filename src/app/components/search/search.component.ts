import { Component, OnInit } from '@angular/core';
import { LastfmService } from '../../services/lastfm.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  termino: string = '';

  constructor( private _lastfm: LastfmService ) { }

  ngOnInit() { }

  buscarArtista = function() {

  if (this.termino.length === 0) {
    return;
  }

  this._lastfm.getTopArtists( this.termino )
    .subscribe( artists => {
      // console.log('Information Artists Ready!');
      // console.log(artists[0].image[1]);
    });
  };

}
