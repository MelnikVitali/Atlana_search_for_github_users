import React from 'react';
import { Avatar,  Button,  Grid, Paper, Typography } from '@material-ui/core';
import useStyles from './styles';
import {  useSelector } from 'react-redux';
import {  usersSelector } from '../../store/usersReducers';

const UserItem = ({user, handleDisplayCurrentUser}) => {
    const classes = useStyles();

    const {loading,  users} = useSelector(usersSelector);

    return (
        <Paper className={classes.paper} data-aos="fade-right">
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
                        {!loading  && (users[user.login])  &&(
                            <Typography noWrap className={classes.repos} >
                                Repo:&nbsp;{users[user.login].user.public_repos === 0 ? 0 : users[user.login].user.public_repos}
                            </Typography >
                        )}
                    </Grid >
                </Grid >
            </Button >
        </Paper >
    );
};

export default UserItem;
