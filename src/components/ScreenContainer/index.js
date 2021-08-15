import React from 'react';
import { Grid } from '@material-ui/core';

import UsersScreen from '../UsersScreen';
import CurrentUserScreen from '../CurrentUserScreen';

import useStyles from './styles';
import { useSelector } from 'react-redux';
import { usersSelector } from '../../store/usersReducers';

const ScreenContainer = () => {
    const classes = useStyles();

    const {queriedUsers, isOpenDisplayUser} = useSelector(usersSelector);

    return (
        <Grid container
              component="main"
              spacing={2}
              className={classes.container}
        >
            <UsersScreen />
            {
                queriedUsers.length !== 0 && isOpenDisplayUser &&
                <CurrentUserScreen />
            }

        </Grid >
    );
};

export default ScreenContainer;
