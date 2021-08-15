import React from 'react';

import { Button, Grid, Link, Paper, Typography } from '@material-ui/core';

import useStyles from './styles';

const ReposItem = ({repo}) => {
    const classes = useStyles();

    return (

        <Paper className={classes.paper} >
            <Link href={repo.html_url} underline="none" className={classes.link} >
                <Button fullWidth >
                    <Grid container className={classes.gridContainer} spacing={2} justifyContent="space-between" >
                        <Grid >
                            <Typography >
                                {repo.name}
                            </Typography >
                        </Grid >
                        <Grid item >
                            <Grid container direction="column" >
                                <Typography noWrap >
                                    {repo.forks_count} &nbsp; Forks
                                </Typography >
                                <Typography noWrap >
                                    {repo.stargazers_count} &nbsp; Stars
                                </Typography >
                            </Grid >
                        </Grid >
                    </Grid >

                </Button >
            </Link >
        </Paper >
    );
};

export default ReposItem;
