import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPokemon } from './IPokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  
  _url:string ="https://pokeapi.co/api/v2/pokemon/";

  constructor(private _http:HttpClient) { }

  getPokemons():Observable<IPokemon[]>{
    return this._http.get<IPokemon[]
    >(this._url);
  }

}
