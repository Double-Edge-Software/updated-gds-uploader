import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( ( theme ) => ({
    root: {
        margin:theme.spacing(3,0,2),
        fontFamily: '',
        textAlign: 'center',
        fontSize: '40px',
        color: 'gold',
        textShadow: '1px 1px black'
    }
}))

export const Header = () => {

    const styles = useStyles()

    return (
        <Typography className={styles.root} component="h1">
            Greater Demand Solutions Upload 
        </Typography>
    )
}