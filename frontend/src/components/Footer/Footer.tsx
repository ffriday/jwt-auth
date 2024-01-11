import { useEffect, useState } from 'react';
import SignalWifiStatusbar4BarIcon from '@mui/icons-material/SignalWifiStatusbar4Bar';
import SignalWifiStatusbarConnectedNoInternet4Icon from '@mui/icons-material/SignalWifiStatusbarConnectedNoInternet4';

import axios from 'axios';
import styles from './Footer.module.scss';
import { Routes, STATUS_OK, URL } from '../../constants/constants';

type statusResponse = {
  name: string;
  message: string;
};

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <p>JWT-AUTH</p>
      <Status />
    </footer>
  );
}

function Status(): JSX.Element {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    axios
      .get<statusResponse>(`http://${URL()}/${Routes.Status}`)
      .then((res) => {
        setStatus(res.data.message === STATUS_OK);
      })
      .catch(() => setStatus(false));
  }, []);

  return status ? (
    <SignalWifiStatusbar4BarIcon color="success" />
  ) : (
    <SignalWifiStatusbarConnectedNoInternet4Icon />
  );
}
