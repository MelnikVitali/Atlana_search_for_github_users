import React from 'react';

import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

import useStyles from './styles';

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.root} >
            <Toolbar className={classes.toolBar} >
                <IconButton
                    size="small"
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                >
                    <GitHubIcon />
                </IconButton >
                <Typography
                    component="h1"
                    variant="h6"
                >
                    GitHub user search
                </Typography >
            </Toolbar >
        </AppBar >
    );
};

export default Header;
