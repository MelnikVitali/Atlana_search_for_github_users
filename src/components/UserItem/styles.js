import { pxToRem } from '../../utils/pxToRem';

const {makeStyles} = require('@material-ui/core');

const useStyles = makeStyles(theme => ({
    paper: {
        backgroundColor: theme.palette.background.default,
        margin:pxToRem(6),
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
        textAlign:'left',
        // paddingLeft: pxToRem(30),
        // [theme.breakpoints.down('sm')]: {
        //     paddingLeft: pxToRem(25),
        // },
        // [theme.breakpoints.down('xs')]: {
        //     paddingLeft: pxToRem(12),
        // },
    },
    repos: {
        textAlign: 'right'
    },
    preloader: {
        float:'right'
    },
}));

export default useStyles;
