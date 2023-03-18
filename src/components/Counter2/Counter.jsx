import { useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import Controls from './Controls';

export default function Counter({ startValue }) {
  const [value, setValue] = useState(startValue);

  const hendelIncrement = event => {
    setValue(prev => prev + 1);
  };
  const hendelDecrement = () => {
    setValue(prev => prev - 1);
  };

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
      <Controls OnDecrement={hendelDecrement} OnIncrement={hendelIncrement} />
    </div>
  );
}
