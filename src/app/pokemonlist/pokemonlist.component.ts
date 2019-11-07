import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../poke-api.service';
import { IPokemon } from '../IPokemon';
import { HttpClient } from '@angular/common/http';
import { InfoPokemon } from '../InfoPokemon';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.css']
})
export class PokemonlistComponent implements OnInit {
  pokemones: IPokemon[];

  pokemonSeleccionado:InfoPokemon ;
 
  constructor(private http:HttpClient) { }

  ngOnInit() {
   this.http.get("https://pokeapi.co/api/v2/pokemon/")
    .subscribe(data=>{
      this.pokemones=data['results']
    })
    this.pokemonSeleccionado=null;
    // this.getPokemon(1)
  }

  closeModal(){
    this.pokemonSeleccionado = null;
  }

  getPokemon(url:string){
    debugger;
    this.http.get(url)
    .subscribe((data:any) =>{
      debugger;
      this.pokemonSeleccionado = new InfoPokemon(
        data.name,
        data.height,
        data.sprites.front_default,
        data.abilities.map(x=>{
            return x.ability.name
        })
      );


      console.log(this.pokemonSeleccionado);
    })

    

  }

}
