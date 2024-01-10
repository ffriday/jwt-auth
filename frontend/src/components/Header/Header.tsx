import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LogoutIcon from '@mui/icons-material/Logout';
import { useResize } from '../../hooks';
import { MEDIA_MOBILE } from '../../constants/constants';

import styles from './Header.module.scss';

enum HeaderText {
  caption = 'JWT-AUTH',
  login = 'Log In',
  signup = 'Sign Up',
  logout = 'Log Out',
}

const isLogged = false; // TODO - change to Auth hook

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <h1>{HeaderText.caption}</h1>
      <AuthButtons />
    </header>
  );
}

function AuthButtons(): JSX.Element {
  const { width } = useResize();

  return !isLogged ? (
    <div className={styles.buttons}>
      <Button variant="outlined" startIcon={<LoginIcon />}>
        {width > MEDIA_MOBILE ? HeaderText.login : ''}
      </Button>
      <Button variant="outlined" startIcon={<HowToRegIcon />}>
        {width > MEDIA_MOBILE ? HeaderText.signup : ''}
      </Button>
    </div>
  ) : (
    <Button variant="outlined" startIcon={<LogoutIcon />}>
      {width > MEDIA_MOBILE ? HeaderText.logout : ''}
    </Button>
  );
}
