import React, {useEffect, useState} from 'react';
import {Container} from 'react/Container'
import {BrowserRouter} from 'react-router-dom';

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

        
        <Container>
          
        </Container>
      </div>
    </BrowserRouter>

  );
}

export { App };
