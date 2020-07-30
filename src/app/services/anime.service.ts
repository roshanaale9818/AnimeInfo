import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { config } from './../apiconfig';
import { Response } from './../model/response';
import { Animedetail } from './../model/animedetail';
import { Character } from './../model/character';
import { Characterdetail } from './../model/characterdetail';
import {catchError,retry} from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(
    private http:HttpClient
  ) { }

  searchAnime(anime):Observable<any>{
    console.log(anime.Name)
    return this.http.get<Response>(config.serverApiUrl.concat('search/anime'),{
      params:new HttpParams().set('q=',anime.Name)
    }).pipe(catchError(this.handleError));
  //   return this.http.get<Response>(`${config.serverApiUrl}search/anime`, {
  //     params: new HttpParams().set('q=',anime.Name)
  // }) 
  }
  getAnimeDetail(id):Observable<Animedetail>{
    return this.http.get<any>(config.serverApiUrl +'anime/'+id).pipe(
      retry(3),catchError(this.handleError))
    // return this.http.get<any>(`${config.serverApiUrl}anime/${id}`).pipe(catchError(this.handleError);
  }
  getCharacters(id):Observable<Character>{
    return this.http.get<Character>(config.serverApiUrl+'anime/'+id+'/characters_staff').pipe(
      retry(3),catchError(this.handleError));
  }
  getCharacterDetail(id):Observable<Characterdetail>{
    // return this.http.get()
    return this.http.get<Characterdetail>(config.serverApiUrl+'character/'+id).pipe(
      retry(3),
      catchError(this.handleError));
  }
  handleError(error:HttpErrorResponse){
    alert(error.error.message)
    return throwError(error.error.message ||"Server Error");
  }


}
