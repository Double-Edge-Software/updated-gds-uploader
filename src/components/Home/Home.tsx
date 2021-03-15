import * as React from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import logo from  '../../assests/images/gds-logo.png'

export interface Props {
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    center: {
      textAlign: 'center',
      display: 'block',
      margin: '3rem auto',
      maxWidth: '100%',
    }
  }),
);

export const  Home  = (props: Props) => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing ={3}>
        <Grid item xs={12}>
          <img className={classes.center} src={logo} alt="gds-logo"/>
        </Grid>
      </Grid>
    </div>
  );
}
