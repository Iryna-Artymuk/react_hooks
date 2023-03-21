import { useState, useEffect } from 'react';
import Button from '../../Button/Button';

export default function Counter() {
  const [valueCounterA, setValueCounterA] = useState(0);
  const [valueCounterB, setValueCounterB] = useState(0);

  const handelClickCounterA = () =>
    setValueCounterA(prevState => prevState + 1);
  const handelClickCounterB = () =>
    setValueCounterB(prevState => prevState + 1);

  useEffect(() => {
    const total = valueCounterA + valueCounterB;
    // console.log(' updating' + Date.now());
    document.title = ` Total clicks ${total} `;
  }, [valueCounterA, valueCounterB]);
  return (
    <>
      <div>
        <Button type="button" onClick={handelClickCounterA}>
          CounterA
        </Button>
        <div> Кликнули counterA {valueCounterA} раз</div>
      </div>
      <div>
        <Button type="button" onClick={handelClickCounterB}>
          CounterB
        </Button>
        <div> Кликнули counterA {valueCounterB} раз</div>
        {/* 
        <p>Total{total}</p> */}
      </div>
    </>
  );
}
