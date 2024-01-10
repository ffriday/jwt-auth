import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import styles from './RootLayout.module.scss';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function RootLayout(): JSX.Element {
  return (
    <Grid container className={styles.rootGrid}>
      <Grid item xs={12} className={styles.headerContainer}>
        <Header />
      </Grid>
      <Grid container item xs={12} className={styles.main}>
        <Outlet />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}
