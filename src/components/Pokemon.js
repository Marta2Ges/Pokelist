import React from "react";
//import './App.css';

const Pokemon = (props) => {
  return (
    <React.Fragment>
      <section className="App__cardsList__pokemon--imageSection">
        <img className="image" src={props.srcImage} alt=""></img>
      </section>
      <section className="App__cardsList__pokemon--nameSection">
        <h2 className="title">{props.PokeName}</h2>
      </section>
      <section className="App__cardsList__pokemon--typeSection">
        {props.PokeTypes.map((type, i) => {
          return (
            <li key={i} className="App__cardsList__pokemon--pokeList">
              <div>{type}</div>
            </li>
          );
        })}
      </section>
    </React.Fragment>
  );
};

export default Pokemon;
