import { Component, OnInit } from '@angular/core';
import { LastfmService } from '../../services/lastfm.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private _lastfm: LastfmService ) { }

  ngOnInit() {
    this._lastfm.getTopArtists();
  }

}
