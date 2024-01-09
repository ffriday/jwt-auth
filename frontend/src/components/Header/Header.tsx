import { Button } from '@mui/material';
import styles from './Header.module.scss';

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <h1>jwt-auth</h1>
      <div className={styles.buttons}>
        <Button variant="outlined">Log In</Button>
        <Button variant="outlined">Sign Up</Button>
      </div>
    </header>
  );
}
