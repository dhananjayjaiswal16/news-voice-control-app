import React from 'react'
import { Typography, Switch } from '@material-ui/core';
import alanLogo from '../../alanLogo.svg'
import useStyles from './styles';

const Navbar = ({ darkMode, setDarkMode }) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography gutterBottom className={classes.topBar} variant='h4'><a href="https://alan.app/"><img src={alanLogo} alt="Alan Logo" style={{ position: 'relative', top: '20px' }} height='60px' /></a> powered news app</Typography>
            <div style={{ position: 'relative', top: '32px' }}>
                <Switch
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}

                />
            </div>
        </div>
    )
}

export default Navbar;