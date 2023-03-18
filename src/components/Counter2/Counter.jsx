import { useReducer } from 'react';

import Controls from './Controls';
//prevState десьруктурихується з useReducer  actions це оюєкт з даними
// по яким буде виконуватись switch
function CountReduser(prevState, actions) {
  switch (actions.type) {
    case 'Decrement':
      return prevState - actions.payload;
    case 'Increment':
      return prevState + actions.payload;
    default:
      return prevState;
  }
}

export default function Counter({ startValue }) {
  // const [value, setValue] = useState(startValue);
  const [value, dispatch] = useReducer(CountReduser, startValue);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        padding: '15px',

        fontSize: '48px',
      }}
    >
      <span> {value}</span>
      <Controls
        OnDecrement={() => dispatch({ type: 'Decrement', payload: 1 })}
        OnIncrement={() => dispatch({ type: 'Increment', payload: 1 })}
      />
    </div>
  );
}
