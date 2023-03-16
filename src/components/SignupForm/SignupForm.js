import { useState } from 'react';

import styles from './SignupForm.module.css';

export default function SignupForm() {
  // деструктуризація масиву з обєкту useState
  // перше значення це ключ а друге функція для його оновлення в стейті
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // функція яка буде по настанні події onChange  викликати іншу функцію
  // яка буде змінювати значенння змінної в стейті
  // const handelEmailChange = event => {
  //   setEmail(event.target.value);
  // };
  // const handePasswordChange = event => {
  //   setPassword(event.target.value);
  // };
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

      <button type="submit">Зарегистрироваться</button>
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
