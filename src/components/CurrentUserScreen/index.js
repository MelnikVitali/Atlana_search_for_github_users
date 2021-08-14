import React, { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash.debounce';

import { Avatar, Box, CircularProgress, Grid, Paper, Typography } from '@material-ui/core';
import SearchBar from 'material-ui-search-bar';

import { useSelector } from 'react-redux';

import { clearResults, usersSelector } from '../../store/usersReducers';

import useStyles from './styles';
import ReposItem from '../ReposItem';

const CurrentUserScreen = () => {
    const classes = useStyles();

    const {
        loading,
        users,
        isCurrentUserRepos,
        currentUser,
        isOpenDisplayUser
    } = useSelector(usersSelector);

    const [value, setValue] = useState('');
    const [dbValue, saveToDb] = useState('');

    const {user, repos} = users[currentUser];

    let filteredRepos = repos;

    if (dbValue !== '' && repos.length !== 0) {
        filteredRepos = repos.filter((repo) => {
            return repo.name.toLowerCase().includes(dbValue.toLowerCase());
        });
    }
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
        setValue('');
        debouncedSave('');
    };

    useEffect(() => {
        return () => {
            cancelSearch();
        };
    }, [user]);


    return isOpenDisplayUser && (
        <Grid item sm={6} >
            <Paper className={classes.paper} elevation={3} >
                <Grid container direction="column" className={classes.container} >
                    <Grid item >
                        <Typography variant="h5" align="center" gutterBottom className={classes.title} >
                            GitHub Searcher
                        </Typography >
                    </Grid >

                    <Grid item xs={12} sm={3} md={12} >

                        <Grid container alignItems="center" spacing={2} >
                            <Grid item md={6} >
                                <Avatar
                                    alt={user.login}
                                    src={user.avatar_url}
                                    variant="rounded"
                                    className={classes.large} />
                            </Grid >
                            <Grid item md={6} >
                                <Grid container direction="column" >
                                    <Typography >
                                        UserName &nbsp; - &nbsp;{user.login}
                                    </Typography >
                                    <Typography >
                                        Email &nbsp; - &nbsp;{user.email}
                                    </Typography >
                                    <Typography >
                                        Location &nbsp; - &nbsp;{user.location}
                                    </Typography >
                                    <Typography >
                                        Join
                                        Date &nbsp; - &nbsp;{(user.created_at).toLocaleString().slice(0, 10)}
                                    </Typography >
                                    <Typography >
                                        {user.followers} &nbsp; Followers
                                    </Typography >
                                    <Typography >
                                        Followers &nbsp;{user.following}
                                    </Typography >
                                </Grid >

                            </Grid >
                            <Grid item xs={12} md={12} >
                                <Typography >
                                    {user.bio}
                                </Typography >
                            </Grid >
                        </Grid >
                    </Grid >

                    <Grid item >
                        <SearchBar
                            value={value}
                            placeholder="Search for User's Repositories"
                            onChange={(newValue) => handleChange(newValue)}
                            onCancelSearch={cancelSearch}
                            onRequestSearch={cancelSearch}
                            className={classes.searchBar}
                        />
                    </Grid >
                    {loading && isCurrentUserRepos && (
                        <Box className={classes.preloader} >
                            <CircularProgress
                                thickness={5}
                                size={36}
                                color="secondary"
                            />
                        </Box >
                    )}

                    {repos.length !== 0 && (
                        <Grid item >
                            {filteredRepos.map(repo => {
                                return (
                                    <ReposItem
                                        key={repo.id}
                                        repo={repo}
                                        loading={loading}
                                    />
                                )
                            })}
                        </Grid >
                    )}
                </Grid >
            </Paper >
        </Grid >
    )
        ;

};

export default CurrentUserScreen;
