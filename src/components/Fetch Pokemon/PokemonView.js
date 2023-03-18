import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from '../Fetch Pokemon/Form';
import PokemonInfo from '../Fetch Pokemon/PokemonInfo';

export default function PokemonView() {
  const [pokemonName, setPokemonName] = useState('');

  const getNameFromFrom = searchValue => {
    setPokemonName(searchValue);
    console.log(pokemonName);
  };
  return (
    <>
      <Form onSubmit={getNameFromFrom} />
      <PokemonInfo pokemonName={pokemonName} />
      <ToastContainer autoClose={3000} />
    </>
  );
}
