import { useState } from 'react';
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';
import Button from '../Button/Button';
export default function PokemonForm({ onSubmit }) {
  const [pokemonName, setPokemonName] = useState('');

  const handelChange = event => {
    setPokemonName(event.currentTarget.value.toLowerCase());
  };

  const handelSubmit = event => {
    event.preventDefault();

    if (pokemonName.trim() === '') {
      toast.error('Введите имя покемона', {
        theme: 'dark',
      });
      //   toast.error('Введите имя покемона');
      return;
    }
    onSubmit(pokemonName);
    setPokemonName('');
  };

  return (
    <form
      onSubmit={handelSubmit}
      style={{
        width: '70%',

        padding: 20,
        background: 'wheat',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
      }}
    >
      <input
        autoComplete="on"
        type="text"
        name="pokemonName"
        onChange={handelChange}
        value={pokemonName}
        style={{
          width: '70%',
          height: 30,
          background: 'white',
          fontSize: 24,
        }}
      />
      <Button
        type="submit"
        style={{
          marginLeft: 10,
          height: 30,
          background: 'white',
        }}
      >
        <ImSearch />
        Найти
      </Button>
    </form>
  );
}
