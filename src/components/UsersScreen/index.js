/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash.debounce';

import { Grid, LinearProgress, Paper, Typography } from '@material-ui/core';
import SearchBar from 'material-ui-search-bar';

import {
    fetchCurrentUserRepos, fetchCurrentUsers, fetchQueriedUsers,
    getCurrentUser, toggleDisplayCurrentUser, usersSelector
} from '../../store/usersReducers';

import UserItem from '../UserItem';

import useStyles from './styles';


const UsersScreen = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const {loading, users, queriedUsers, isOpenDisplayUser, isCurrentUsers} = useSelector(usersSelector);
    const [query, setQuery] = useState('');

    const changeHandler = value => {
        const nextValue = value.trim();

        setQuery(nextValue);
        if (nextValue !== '') {
            dispatch(fetchQueriedUsers(nextValue));
        } else {
            cancelSearch();
        }
    };

    const debouncedChangeHandler = useCallback(
        debounce(changeHandler, 1000)
        , []);

    const cancelSearch = () => {
        setQuery('');
        dispatch(toggleDisplayCurrentUser(false));
    };

    useEffect(() => {
        if (queriedUsers.length !== 0) {
            dispatch(fetchCurrentUsers(queriedUsers, users))
        }

        return () => {
            debouncedChangeHandler.cancel();
        }
    }, [queriedUsers]);

    const handleDisplayCurrentUser = useCallback((login, users) => {
        if (users.hasOwnProperty(login) && (users[login].repos && users[login].repos.length === 0)) {
            dispatch((fetchCurrentUserRepos(login, users)));
        } else {
            dispatch(toggleDisplayCurrentUser(true));
            dispatch(getCurrentUser(login));
        }
    }, []);

    return (
        <Grid item sm={6} xs={12} className={classes.root} >
            <Paper className={classes.paper} elevation={3} >
                <Grid container direction="column" className={classes.container} >
                    <Grid item className={classes.titleContainer} >
                        <Typography variant="h5" align="center" gutterBottom className={classes.title} >
                            GitHub Searcher
                        </Typography >
                    </Grid >
                    <Grid item className={classes.searchContainer} >
                        <SearchBar
                            onChange={newValue => debouncedChangeHandler(newValue)}
                            placeholder="Search for Users"
                            onCancelSearch={cancelSearch}
                            onRequestSearch={cancelSearch}
                            className={classes.searchBar}
                        />
                        {loading && !isOpenDisplayUser && (
                            <LinearProgress color="secondary" className={classes.preloader} />
                        )}
                    </Grid >
                    {queriedUsers.length !== 0 && query !== '' && isCurrentUsers && (
                        <Grid item data-aos="fade-right" >
                            {queriedUsers.map(user => {
                                return (
                                    <UserItem
                                        key={user.id}
                                        user={user}
                                        userLogin={user.login}
                                        handleDisplayCurrentUser={handleDisplayCurrentUser}
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
