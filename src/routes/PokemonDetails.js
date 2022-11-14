import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function PokemonDetails() {
    const [pokemon, setPokemon] = useState(null);
    const [data, setData] = useState([]);
    const params = useParams();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
          .then((res) => res.json())
          .then((data) => {
            setPokemon(data.name);
            setData(data);
            console.log(pokemon)
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);


      if (!pokemon) {
        return <>loading...</>;
      } else {
        return <>

            <Card style={{ width: '18rem' }} className='mx-auto'>
              <Card.Img
                width='286'
                height='286'
                bg='dark'
                variant='top'
                src={data?.sprites.front_default}
              />
              <Card.Body>
                <Card.Title>
                  <span style={{ fontWeight: 'bold' }}>{pokemon}</span>
                </Card.Title>
                <Card.Text as='div'>
                  height: {data.height}
                  <br></br>
                  <br></br>
                  weight: {data.weight}
                  <br></br>
                  <br></br>
                  Abilities:
                  <ul>
                    {data?.abilities.map((ability) => (
                      <li key={ability.ability.name}>
                        <span key={ability.ability.name}>{ability.ability.name}</span>
                      </li>
                    ))}
                  </ul>
                  Types:
                  <ul>
                    {data?.types.map((type) => (
                      <li key={type.type.name}>
                        <span key={type.type.name}>{type.type.name}</span>
                      </li>
                    ))}
                  </ul>
                  Stats:
                  <ul>
                    {data?.stats.map((stat) => (
                      <li key={stat.stat.name}>
                        <span key={stat.stat.name}>{stat.stat.name}</span>
                      </li>
                    ))}
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
     
       
        {/* types: iterate over `pokemon.types` and for each `type` render the `type.type.name`
        stats: iterate over `pokemon.stats` and for each `stat` render the `stat.stat.name` and `stat.base_stat` */}
        </>
      }

   
}


export {PokemonDetails};
