import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LastfmService {

  private application_name = 'lastfm-app';
  private api_key = 'aee25fe9b7ac9f49e1090e6eeb8bad67';
  private shared_key = 'f9f5d67007966b13821a09b39c5220bb';
  private registered_to = 'aides';
  private api_root_url = 'http://ws.audioscrobbler.com/2.0/';
    private url_top_artist_by_tag: string;

  constructor( private _http: HttpClient ) {
    console.log('service SpotifyService ready');
  }

  getTopArtists(tag: string = 'disco', limit: number = 20, page: number = 1) {
    const url_top_artist_by_tag = '?method=tag.gettopartists&tag=' + tag;
    const url = this.formatUrl(url_top_artist_by_tag, limit, page);
    console.log(url);

    this._http.get(url).subscribe( resp => {

      console.log(resp);

    });
  }

  getTopAlbums(tag: string = 'disco', limit: number = 20, page: number = 1) {
    const url_top_albums = '?method=tag.gettopalbums&tag=' + tag;
    const url = this.formatUrl(url_top_albums, limit, page);
    console.log(url);

    this._http.get(url).subscribe( resp => {

        console.log(resp);

    });
  }

    /**
     * @brief return complete url with api_root + api_key + pagination if needed
     * @param {string} url
     * @param {number} limit
     * @param {number} page
     * @returns {string}
     */
  private formatUrl(url: string, limit: number, page: number): string {
    let formatedUrl = this.api_root_url + url +  '&api_key=' + this.api_key + '&format=json';
    if (limit > 0) {
        formatedUrl = formatedUrl + '&limit=' + limit;
    }
    if (page > 0) {
        formatedUrl = formatedUrl + '&page=' + page;
    }
    return formatedUrl;
  }
}
