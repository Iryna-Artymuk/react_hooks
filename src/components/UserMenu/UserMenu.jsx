import React, { useContext } from 'react';
import ctx from '../../Context/authContext';
import SignupForm from '../SignupForm/SignupForm';
import Button from '../Button/Button';
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  tag: {
    fontSize: 24,
    margin: `0 20px 0 0`,
  },
};
// console.log(ctx);
export default function UserMenu() {
  const { user, logIn, logOut } = useContext(ctx);

  return (
    <div style={styles.container}>
      {user ? (
        <>
          <p style={styles.tag}>Wellcome {user}</p>
          <Button type="button" onClick={logOut}>
            Выйти
          </Button>
        </>
      ) : (
        <SignupForm logIn={logIn} />
      )}
    </div>
  );
}
