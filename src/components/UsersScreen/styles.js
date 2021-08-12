import { pxToRem } from '../../utils/pxToRem';

const {makeStyles} = require('@material-ui/core');
const useStyles = makeStyles(theme => ({
    container: {
        position:'relative',
        padding: pxToRem(3),
        width: '100%',
        flexGrow: 1
    },
    paper: {
        backgroundColor: theme.palette.background.default,
    },
    title: {
        fontWeight: 500,
        letterSpacing: pxToRem(0.2)
    },
    searchBar: {
        margin: `${pxToRem(18)} ${pxToRem(36)} ${pxToRem(28)}`,
        [theme.breakpoints.down('md')]: {
            marginLeft: pxToRem(14),
            marginRight: pxToRem(14),
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: pxToRem(6),
            marginRight: pxToRem(6),
        },
    },
    preloader: {
        position:'absolute',
        top:pxToRem(66),
        left:pxToRem(18)
        // margin: `0  ${pxToRem(40)}  ${pxToRem(12)}`,
    },

}));

export default useStyles;
