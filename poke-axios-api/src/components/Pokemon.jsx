import React, { useState } from 'react';
import axios from 'axios';

const Pokemon = () => {
    const [pokemons, setPokemons] = useState([]);
    const buscarDatos = () =>{

    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807').then(response=>{
        setPokemons(response.data.results.map((poke)=> ({nombre: poke.name})));
    })

    }

    return (
    <div className='container'>
        <button className='fetcher' onClick={buscarDatos}>Fetch Pokemon</button>
        <ul className='list'>
            {
                pokemons.map((poke, indice)=> <li className='listItem' key={indice}>{poke.nombre}</li> )
            }
        </ul>
    </div>
    )
}

export default Pokemon;