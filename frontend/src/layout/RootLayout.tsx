import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import styles from './RootLayout.module.scss';
import { Header } from '../components/Header';

export function RootLayout(): JSX.Element {
  return (
    <Grid container className={styles.rootGrid}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid container item xs={12} className={styles.main}>
        <Outlet />
      </Grid>
      <Grid item xs={12}>
        FOOTER
      </Grid>
    </Grid>
  );
}
