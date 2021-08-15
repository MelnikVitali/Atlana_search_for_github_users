import { pxToRem } from '../../utils/pxToRem';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    paper: {
        backgroundColor: theme.palette.background.default,
        margin: pxToRem(6),
        display: 'flex'
    },
    gridContainer: {
        padding: pxToRem(12),
        alignItems: 'center',
    },
    link: {
        width: '100%',
        height: '100%'
    },
    large: {
        width: pxToRem(56),
        height: pxToRem(56),
    },
    userName: {
        textAlign: 'left',
        paddingLeft: pxToRem(30),
        [theme.breakpoints.down('sm')]: {
            paddingLeft: pxToRem(25),
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: pxToRem(12),
        },
    },
    repos: {
        textAlign: 'right'
    },
    preloader: {
        float: 'right'
    },
}));

export default useStyles;
