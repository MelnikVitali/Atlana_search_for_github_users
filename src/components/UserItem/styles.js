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
    large: {
        width: pxToRem(56),
        height: pxToRem(56),
    },
    userName: {
        textAlign: 'left',
    },
    repos: {
        textAlign: 'right'
    },
    preloader: {
        float: 'right'
    },
}));

export default useStyles;
