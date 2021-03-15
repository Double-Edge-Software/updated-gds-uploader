import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: theme.spacing(4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  })); 

export const MainContainer = ({...props}) => {

    const classes = useStyles();

    return (
        <Container
          className={classes.root}
          component="main"
          maxWidth="xs"
          {...props}
        >
          {props.children}
        </Container>
      );

}