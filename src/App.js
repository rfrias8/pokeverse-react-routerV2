import React, {useEffect, useState} from 'react';
import {Container} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from "./routes/Home"
import {PokemonDetails} from "./routes/PokemonDetails"

function App() {

const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
      .then((res) => res.json())
      .then((data) => {
        setPokemonList(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  
  return (
    <BrowserRouter>
      <div data-testid="app">
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:name" element={<PokemonDetails />}></Route>
        </Routes>

        <Container>
          
        </Container>
      </div>
    </BrowserRouter>

  );
}

export { App };
