import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useResize } from '../../hooks';

import styles from './Header.module.scss';
import { MEDIA_MOBILE } from '../../constants/constants';

export default function Header(): JSX.Element {
  const { width } = useResize();

  return (
    <header className={styles.header}>
      <h1>JWT-AUTH</h1>
      <div className={styles.buttons}>
        <Button variant="outlined" startIcon={<LoginIcon />}>
          {width > MEDIA_MOBILE ? 'Log In' : ''}
        </Button>
        <Button variant="outlined" startIcon={<HowToRegIcon />}>
          {width > MEDIA_MOBILE ? 'Sign Up' : ''}
        </Button>
      </div>
    </header>
  );
}
