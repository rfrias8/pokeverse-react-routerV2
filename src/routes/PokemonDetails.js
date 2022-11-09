import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

function PokemonDetails() {
    const [pokemon, setPokemon] = useState(null);
    const params = useParams();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            setPokemon(data.name);
            console.log(pokemon)
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

      if (!pokemon) {
        return <>loading...</>;
      }


      return 
        <>
          height: 

        </>
}


export {PokemonDetails};
