import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  logoFrame: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 'auto',
    height: 30,
  },
  name: {
    color: 'white',
    marginLeft: '8px',
  },
});
const LogoFull = () => {
  const classes = useStyles();

  return (
    <div className={classes.logoFrame}>
      <img className={classes.logo} src="./../../../lightLogo.png" alt="Logo" />
      <h2 className={classes.name}>Sumant Dev</h2>
    </div>
  );
};

export default LogoFull;
