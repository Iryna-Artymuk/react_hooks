import { useState, useEffect, useRef } from 'react';
import styles from './Clock.module.css';
import Button from '../Button/Button';
export default function Clock() {
  const [time, setTime] = useState(() => new Date());
  // let intervalId = null; // так як функція на кожному рендері створюється заново тому згачення intervalid не зберігається..
  // для отримання стабільного значення яке не перезаписується треба використовувати useRef
  // створюється обєкт з кластивість current де буде початкове значення

  let intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      console.log('Это функция очистки перед следующим вызовом useEffect');
      stopTime();
    }; // з хуку  useEffect можна повернути функцію яка буде викликана
    // одразу як тільки компонент видаляється з dom дерева
  }, []);

  const stopTime = () => clearInterval(intervalId.current);
  // const startTime = () =>
  //   (intervalId.current = setInterval(() => {
  //     console.log(intervalId.current);
  //     setTime(new Date());
  //   }, 1000));
  return (
    <div className={styles.container}>
      <p className={styles.clockface}>
        Текущее время:{time.toLocaleTimeString()}
      </p>
      {/* <Button type="button" onClick={startTime}>
        Start
      </Button> */}
      <br />
      <Button type="button" onClick={stopTime}>
        Stop
      </Button>
    </div>
  );
}

// class OldClock extends Component {
//   state = {
//     time: new Date(),
//   };

//   intervalId = null;

//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       console.log('Это интервал каждые 1000ms ' + Date.now());
//       this.setState({ time: new Date() });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     console.log('Эот метод вызывается перед размонтированием компонента');
//     this.stop();
//   }

//   stop = () => {
//     clearInterval(this.intervalId);
//   };

//   render() {
//     return (
//       <div className={styles.container}>
//         <p className={styles.clockface}>
//           Текущее время: {this.state.time.toLocaleTimeString()}
//         </p>
//         <Btype="button" onClick={this.stop}>
//           Остановить
//         </button>
//       </div>
//     );
//   }
// }
