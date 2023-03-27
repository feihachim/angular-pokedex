import { PokemonService } from "./pokemon.service";
import { RouterModule, Routes } from "@angular/router";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { BorderCardDirective } from "./border-card.directive";
import { ListPokemonComponent } from "./list-pokemon/list-pokemon.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetailPokemonComponent } from "./detail-pokemon/detail-pokemon.component";

const pokemonRoutes: Routes = [
  { path: "pokemons", component: ListPokemonComponent },
  { path: "pokemon/:id", component: DetailPokemonComponent },
];

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
  ],
  imports: [CommonModule, RouterModule.forChild(pokemonRoutes)],
  providers: [PokemonService],
})
export class PokemonModule {}
