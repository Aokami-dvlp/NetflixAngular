import { Movie, IPartialMovie, Details, IDetails } from './../../../src/app/shared/interface'
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {}

  private mediaData = new BehaviorSubject<Movie[]>([]);
  public mediaData$ = this.mediaData.asObservable();

  getPopularMovies(page: number): Observable<Movie[]> {
    let params = new HttpParams()
    .set('api_key', environment.apiKey).set('page', page);

    return this.http
      .get<IPartialMovie>(`${environment.apiUrl}movie/popular`, { params })
      .pipe(map((data) => data.results.map((movie) => Movie.Build(movie))));
  }

  getPopularTV(page: number): Observable<Movie[]> {
    let params = new HttpParams()
    .set('api_key', environment.apiKey).set('page', page);

    return this.http
      .get<IPartialMovie>(`${environment.apiUrl}tv/popular`, { params })
      .pipe(map((data) => data.results.map((movie) => Movie.Build(movie))));
  }

  getMovieDetails(id: number): Observable<Details> {
    let params = new HttpParams()
      .set('api_key', environment.apiKey)
      .set('language', 'it');

    return this.http
      .get<IDetails>(`${environment.apiUrl}movie/${id}`, { params })
      .pipe(map((response) => Details.Build(response)));
  }

  getTvDetails(id: number): Observable<Details> {
    let params = new HttpParams()
      .set('api_key', environment.apiKey)
      .set('language', 'it');

    return this.http
      .get<IDetails>(`${environment.apiUrl}tv/${id}`, { params })
      .pipe(map((response) => Details.Build(response)));
  }

  getManualSearch(title:string, platform: string): Observable<Movie[]> {
    let params = new HttpParams()
    .set('api_key', environment.apiKey)
    .set('language', 'it')
    .set('query', title);

    return this.http
      .get<IPartialMovie>(`${environment.apiUrl}search/${platform}`, { params })
      .pipe(map((data) => data.results.map((movie) => Movie.Build(movie))));
  }

  setMediaData(data:Movie[]){
    this.mediaData.next(data)
  }
}
