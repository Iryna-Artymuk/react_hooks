// import { useState, useEffect } from 'react';

import styles from './SignupForm.module.css';
import Button from '../Button/Button';

// custom Hook use LocalStorage
import useLocalStorage from '../../hooks/hooks';

export default function SignupForm() {
  console.log('render ');
  // деструктуризація масиву з обєкту useState
  // перше значення це ключ а друге функція для його оновлення в стейті
  // const [email, setEmail] = useState(
  //   () => JSON.parse(window.localStorage.getItem('email')) ?? '' // лінва загрузка  звернення до докалсторедж тільки один раз
  //   //без неї запит в локалсторедж буде кожного разу при запуску функції
  // );
  // const [password, setPassword] = useState(
  //   () => JSON.parse(window.localStorage.getItem('password  ')) ?? ''
  // );
  // функція яка буде по настанні події onChange  викликати іншу функцію
  // яка буде змінювати значенння змінної в стейті
  // const handelEmailChange = event => {
  //   setEmail(event.target.value);
  // };
  // const handePasswordChange = event => {
  //   setPassword(event.target.value);
  // };
  // можна замвнити на універсалну функцію handelChange
  const handelChange = event => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    switch (inputName) {
      case 'email':
        setEmail(inputValue);
        break;
      case 'password':
        setPassword(inputValue);
        break;
      default:
        return;
    }
  };
  // useEffect(() => {
  //   window.localStorage.setItem('email', JSON.stringify(email), [email]);
  // });

  // useEffect(() => {
  //   window.localStorage.setItem('password', JSON.stringify(password), [
  //     password,
  //   ]);
  // });

  // with customHooks
  const [email, setEmail] = useLocalStorage('email', ''); // деструкткризація масиву в нові змінні https://learn.javascript.ru/destructuring-assignment
  const [password, setPassword] = useLocalStorage('password', '');

  return (
    <form className={styles.form} autoComplete="on">
      <label className={styles.label}>
        <span>Почта</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handelChange}
        />
      </label>

      <label className={styles.label}>
        <span>Пароль</span>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handelChange}
        />
      </label>

      <Button type="submit">Зарегистрироваться</Button>
    </form>
  );
}

// class OldSignupForm extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = evt => {
//     const { name, value } = evt.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <form className={styles.form} autoComplete="off">
//         <label className={styles.label}>
//           <span>Почта</span>
//           <input
//             type="email"
//             name="email"
//             onChange={this.handleChange}
//             value={this.state.email}
//           />
//         </label>

// <label className={styles.label}>
//   <span>Пароль</span>
//   <input
//     type="password"
//     name="password"
//     onChange={this.handleChange}
//     value={this.state.password}
//   />
// </label>

//         <button type="submit">Зарегистрироваться</button>
//       </form>
//     );
//   }
// }
