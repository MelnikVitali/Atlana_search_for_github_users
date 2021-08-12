import React, { useEffect } from 'react';
import { Avatar, Box, Button, CircularProgress, Grid, Paper, Typography } from '@material-ui/core';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser, usersSelector } from '../../store/usersReducers';

const UserItem = React.memo(({user, handleDisplayCurrentUser}) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const {loading, isCurrentUsers, queriedUsers, currentUsers, users} = useSelector(usersSelector);

    useEffect(() => {
        console.log(!users[user.login]);
        if (Object.keys(users).length === 0 || !users[user.login]) {
            dispatch(fetchCurrentUser(user.login));
        }
    }, [queriedUsers]);

    console.log('renderuserItem');

    return (
        <Paper className={classes.paper} >
            <Button
                fullWidth
                onClick={() => handleDisplayCurrentUser(user.login, users)}
            >
                <Grid container className={classes.gridContainer} >
                    <Grid item xs={12} sm={3} md={2} >
                        <Avatar
                            alt={user.login}
                            src={user.avatar_url}
                            variant="rounded"
                            className={classes.large} />
                    </Grid >
                    <Grid item xs={12} sm={7} md={8} className={classes.userName} >
                        <Typography noWrap >
                            {user.login}
                        </Typography >
                    </Grid >
                    <Grid item xs={12} sm={2} md={2} >

                        {loading && (
                            <Box className={classes.preloader} >
                                <CircularProgress
                                    thickness={5}
                                    size={36}
                                    color="secondary"
                                />
                            </Box >
                        )}
                        {!loading && (users[user.login]) && (
                            <Typography noWrap className={classes.repos} >
                                Repo: {users[user.login].user.public_repos}
                            </Typography >
                        )}

                    </Grid >

                </Grid >
            </Button >
        </Paper >
    );
});

export default UserItem;
