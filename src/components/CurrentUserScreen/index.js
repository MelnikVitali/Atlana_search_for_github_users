/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import debounce from 'lodash.debounce';

import { Avatar, Grid, LinearProgress, Paper, Typography } from '@material-ui/core';
import SearchBar from 'material-ui-search-bar';

import ReposItem from '../ReposItem';

import { usersSelector } from '../../store/usersReducers';

import useStyles from './styles';

const CurrentUserScreen = () => {
    const classes = useStyles();

    const {
        loading,
        users,
        currentUser,
        isOpenDisplayUser
    } = useSelector(usersSelector);

    const [value, setValue] = useState('');
    const [dbValue, saveToDb] = useState('');

    const {user, repos} = users[currentUser];

    let filteredRepos = repos;

    useEffect(() => {
        return () => {
            cancelSearch();
        };
    }, [currentUser]);

    if (dbValue !== '' && (repos && repos.length !== 0)) {
        filteredRepos = repos.filter((repo) => {
            return repo.name.toLowerCase().includes(dbValue.toLowerCase());
        });
    }

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

    return isOpenDisplayUser && (
        <Grid item sm={6} data-aos="fade-left" >
            <Paper className={classes.paper} elevation={3} >
                <Grid container direction="column" className={classes.container} >
                    <Grid item >
                        <Typography variant="h5" align="center" gutterBottom className={classes.title} >
                            GitHub Searcher
                        </Typography >
                    </Grid >
                    <Grid item xs={12} md={12} >
                        <Grid container alignItems="center" spacing={2} className={classes.containerUser} >
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
                                        Following &nbsp;{user.following}
                                    </Typography >
                                </Grid >

                            </Grid >
                            <Grid item xs={12} md={12} >
                                <Typography className={classes.bio} >
                                    {user.bio}
                                </Typography >
                            </Grid >
                        </Grid >
                    </Grid >
                    <Grid item className={classes.searchContainer} >
                        <SearchBar
                            value={value}
                            placeholder="Search for User's Repositories"
                            onChange={(newValue) => handleChange(newValue)}
                            onCancelSearch={cancelSearch}
                            onRequestSearch={cancelSearch}
                            className={classes.searchBar}
                        />
                        {loading && (
                            <LinearProgress color="secondary" className={classes.preloader} />
                        )}
                    </Grid >

                    {repos && repos.length !== 0 && (
                        <Grid item data-aos="fade-left" className={classes.reposContainer} >
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
    );
};

export default CurrentUserScreen;
