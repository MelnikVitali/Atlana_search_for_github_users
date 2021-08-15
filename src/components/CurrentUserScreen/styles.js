import { pxToRem } from '../../utils/pxToRem';

const {makeStyles} = require('@material-ui/core');

const useStyles = makeStyles(theme => ({

    paper: {
        backgroundColor: theme.palette.background.default,
    },
    containerUser:{
        padding:pxToRem(12)
    },
    searchContainer:{
        position: 'relative',
        overflow:'hidden',
        padding: `${pxToRem(18)} ${pxToRem(36)} ${pxToRem(28)}`,
        [theme.breakpoints.down('md')]: {
            paddingLeft: pxToRem(14),
            paddingRight: pxToRem(14),
        },
        [theme.breakpoints.down('sm')]: {
            paddingLeft: pxToRem(6),
            paddingRight: pxToRem(6),
        },
    },
    bio:{
        paddingLeft:pxToRem(12)
    },
    large: {
        width: pxToRem(160),
        height: pxToRem(160),
    },
    preloader: {
        position:'absolute',
        width:'100%',
        bottom:0,
        left:0
    },
    reposContainer:{
        padding:`0 ${pxToRem(4)}`
    }
}));

export default useStyles;
