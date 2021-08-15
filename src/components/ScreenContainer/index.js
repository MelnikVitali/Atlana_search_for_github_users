import React from 'react';
import { useSelector } from 'react-redux';

import { Grid } from '@material-ui/core';

import UsersScreen from '../UsersScreen';
import CurrentUserScreen from '../CurrentUserScreen';

import { usersSelector } from '../../store/usersReducers';

import useStyles from './styles';

const ScreenContainer = () => {
    const classes = useStyles();

    const {isOpenDisplayUser} = useSelector(usersSelector);

    return (
        <Grid container
              component="main"

              className={classes.container}
        >
            <UsersScreen />
            {
                isOpenDisplayUser &&
                <CurrentUserScreen />
            }
        </Grid >
    );
};

export default ScreenContainer;
