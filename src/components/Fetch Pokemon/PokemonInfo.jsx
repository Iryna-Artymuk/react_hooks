import { useState, useEffect } from 'react';
import ErrorView from './ErrorView';
import PokemonDataView from './PokemonDataView';
import PokemonPendingView from './PokemonPendingView';

export default function PokemonInfo({ pokemonName }) {
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (pokemonName === '') {
      return; // пропустити перший запуск  useEffect коли pokemonName = " "
      // бо до пустого рядка не можна застосувати методи масиву і скрипт падає
      // помилка PokemonDataView.jsx:17 Uncaught TypeError: Cannot read properties of undefined (reading 'other')
    }
    setStatus('pending');
    fetch(`http://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        }
        return Promise.reject(new Error(` pokemon ${pokemonName} not found `));
      })

      .then(pokemonObj => {
        setPokemonInfo(pokemonObj);
        setStatus('resolved');
      })
      .catch(error => {
        setStatus('rejected');
        setError(error);
      });
  }, [pokemonName, setError, setPokemonInfo, setStatus]);

  if (status === 'idle') {
    return <div> Type pokemon name</div>;
  }
  if (status === 'pending') {
    return <PokemonPendingView />;
  }
  if (status === 'rejected') {
    console.log(error.message);
    return <ErrorView errorText={error.message} />;
  }
  if (status === 'resolved') {
    return <PokemonDataView pokemon={pokemonInfo} />;
  }
}

//   { {this.state.error && <div>{this.state.error.message}</div>}
//   {lodding && <> please wait we are lodding ...</>}
//   {pokemonInfo && (
//     <div
//       style={{
//         width: '70%',

//         padding: 20,
//         background: 'wheat',
//         marginLeft: 'auto',
//         marginRight: 'auto',
//         fontSize: 24,
//       }}
//     >
//       {this.state.pokemonInfo && (
//         <>
//           <img
//             src={
//               pokemonInfo.sprites.other['official-artwork'].front_default
//             }
//             width="240"
//             alt={pokemonInfo.name}
//           />
//           <p> {this.state.pokemonInfo.name}</p>
//         </>
//       )}
//     </div>
//   )}
//   {!pokemonName && <> Type pokemon name</>}
// </> }
