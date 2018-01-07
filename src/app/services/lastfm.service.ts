import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LastfmService {

  private application_name: string;
  private api_key: string;
  private shared_key: string;
  private registered_to: string;
  private api_root_url: string;

  artists: any[] = [];
  albums: any[] = [];


  constructor( private _http: HttpClient ) {
    this.application_name  = 'lastfm-app';
    this.api_key = 'aee25fe9b7ac9f49e1090e6eeb8bad67';
    this.shared_key = 'f9f5d67007966b13821a09b39c5220bb';
    this.registered_to = 'aides';
    this.api_root_url = 'http://ws.audioscrobbler.com/2.0/';
    console.log('service lastFM ready');
  }

  getTopArtists(tag: string = 'queen', limit: number = 20, page: number = 1) {
    const url_top_artist_by_tag = '?method=tag.gettopartists&tag=' + tag;
    const url = this.formatUrl(url_top_artist_by_tag, limit, page);

    // if need to send http headers make the headers
    // let headers = new HttpHeaders({
    //   'authorization': 'Bearer ' + 'my_token';
    // });

    // if need to send http headers send the headers
    // this._http.get(url, { headers } )

    // without http headers
    return this._http.get(url).map( (resp: any) => {
      this.artists = resp.topartists.artist;
      return this.artists;
    });
  }

  getTopAlbums(tag: string = 'disco', limit: number = 20, page: number = 1) {
    const url_top_albums = '?method=tag.gettopalbums&tag=' + tag;
    const url = this.formatUrl(url_top_albums, limit, page);

    return this._http.get(url).map( (resp: any) => {
      console.log(resp);
      this.albums = resp.albums.album;
      return this.albums;
    });
  }

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
