import React, { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import { Box, CircularProgress, Grid, Paper, Typography } from '@material-ui/core';
import SearchBar from 'material-ui-search-bar';

import { useDispatch, useSelector } from 'react-redux';
import {
    fetchCurrentUserRepos,
    fetchCurrentUsers,
    fetchQueriedUsers,
    getCurrentUser,
    toggleDisplayCurrentUser,
    usersSelector
} from '../../store/usersReducers';
import UserItem from '../UserItem';
import useStyles from './styles';

const UsersScreen = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const {loading, users, queriedUsers,currentUsers, isOpenDisplayUser, error} = useSelector(usersSelector);
    const [value, setValue] = useState('');
    const [dbValue, saveToDb] = useState(''); // API call

       // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedSave = useCallback(
        debounce(nextValue => saveToDb(nextValue), 1000),
        []); // will be created only once initially

    const handleChange = value => {
        const nextValue = value.trim();
        setValue(nextValue);

        debouncedSave(nextValue);
    };

    const cancelSearch = () => {
        saveToDb('');
        dispatch(toggleDisplayCurrentUser(false));
    };

    useEffect( () => {
        if (dbValue === '') {
            cancelSearch();

        } else {
           dispatch(fetchQueriedUsers(dbValue));
        }

        return () => {
            cancelSearch();
        };
    }, [dbValue]);

    const handleDisplayCurrentUser = useCallback((login, users) => {
        if (login in users && users[login].repos.length === 0 ) {
            dispatch((fetchCurrentUserRepos(login)));
        }
        if (!error) {
            dispatch(toggleDisplayCurrentUser(true));
        }


        dispatch(getCurrentUser(login));
    }, [isOpenDisplayUser]);

    return (
        <Grid item sm={6} xs={12} >
            <Paper className={classes.paper} elevation={3} >
                <Grid container direction="column" className={classes.container} >
                    <Grid item >
                        <Typography variant="h5" align="center" gutterBottom className={classes.title} >
                            GitHub Searcher
                        </Typography >
                    </Grid >
                    <Grid item >
                        <SearchBar
                            onChange={newValue => handleChange(newValue)}
                            placeholder="Search for Users"
                            onCancelSearch={cancelSearch}
                            onRequestSearch={cancelSearch}
                            className={classes.searchBar}
                        />
                    </Grid >
                    {loading && queriedUsers.length !== 0 && (
                        <Box className={classes.preloader} >
                            <CircularProgress
                                thickness={5}
                                size={36}
                                color="secondary"
                            />
                        </Box >
                    )}

                    {!loading && queriedUsers.length !== 0 &&  (
                        <Grid item >
                            {queriedUsers.map(user => {
                                return (
                                    <UserItem
                                        key={user.id}
                                        user={user}
                                        userLogin={user.login}
                                        handleDisplayCurrentUser={ handleDisplayCurrentUser}
                                    />
                                )
                            })}
                        </Grid >
                    )}
                </Grid >
            </Paper >
        </Grid >
    );
};

export default UsersScreen;

