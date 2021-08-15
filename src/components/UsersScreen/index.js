import React, { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import { Box, CircularProgress, Grid, LinearProgress, Paper, Typography } from '@material-ui/core';
import SearchBar from 'material-ui-search-bar';

import { useDispatch, useSelector } from 'react-redux';
import {
    fetchCurrentUserRepos, fetchCurrentUsers,
    fetchQueriedUsers, getCurrentUser,
    toggleDisplayCurrentUser,
    usersSelector
} from '../../store/usersReducers';
import UserItem from '../UserItem';
import useStyles from './styles';


const UsersScreen = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    console.log('render users screen')

    const {loading, users, queriedUsers, isOpenDisplayUser, error} = useSelector(usersSelector);
    const [query, setQuery] = useState('');

    const changeHandler = value => {
        const nextValue = value.trim();

        setQuery(nextValue);
        if (nextValue !== ''){
            dispatch(fetchQueriedUsers(nextValue));
            dispatch(toggleDisplayCurrentUser(false));
        }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedChangeHandler = useCallback(
        debounce(changeHandler, 1000)
        , []);

    const cancelSearch = () => {
        setQuery('');
        dispatch(toggleDisplayCurrentUser(false));
    };

    useEffect(() => {
        if(queriedUsers.length !== 0){
            dispatch(fetchCurrentUsers(queriedUsers, users))
        }

        return () => {
            debouncedChangeHandler.cancel();
        }
    }, [queriedUsers]);



    const handleDisplayCurrentUser = useCallback((login, users) => {

        console.log('login', login);
        // if (users.hasOwnProperty(login) && users[login].repos.length === 0 ) {
        //     dispatch((fetchCurrentUserRepos(login, users)));
        // }
        if (!error) {
            dispatch(toggleDisplayCurrentUser(true));
        }

        dispatch(getCurrentUser(login));
    }, [isOpenDisplayUser]);

    return (
        <Grid item sm={6} xs={12} >
            <Paper className={classes.paper} elevation={3} >
                <Grid container direction="column" className={classes.container} >
                    <Grid item className={classes.titleContainer}>

                        <Typography variant="h5" align="center" gutterBottom className={classes.title} >
                            GitHub Searcher
                        </Typography >



                    </Grid >
                    <Grid item >
                        <SearchBar
                            onChange={newValue => debouncedChangeHandler(newValue)}
                            placeholder="Search for Users"
                            onCancelSearch={cancelSearch}
                            onRequestSearch={cancelSearch}
                            className={classes.searchBar}
                        />
                        {loading  && !isOpenDisplayUser &&(
                            <LinearProgress color="secondary"  className={classes.preloader}/>
                        )}
                    </Grid >


                    {queriedUsers.length !== 0 && query !== '' && Object.keys(users).length !== 0 && (
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

