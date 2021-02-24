import React from "react";
//import './App.css';
import Pokemon from "./Pokemon";

const PokeList = (props) => {
  return (
    <React.Fragment>
      <h1 className="App__title">Mis Pokemons</h1>
      <ul className="App__cardsList">
        {props.pokemons.map((pokemon, i) => {
          return (
            <li key={i} id={i} className="App__cardsList__pokemon">
              <Pokemon
                srcImage={pokemon.url}
                PokeName={pokemon.name}
                PokeTypes={pokemon.types}
                PokeEvolution={pokemon.evolution}
              />
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default PokeList;
