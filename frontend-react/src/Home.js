import React, { useEffect, useState } from 'react';

const Home = () => {
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('auth_token');
            const response = await fetch('https://pokeapi.co/api/v2/pokemon');
            const data = await response.json();
            setPokemonData(data.results);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Pokemon List</h1>
            <ul>
                {pokemonData.map((pokemon) => (
                    <li key={pokemon.name}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
