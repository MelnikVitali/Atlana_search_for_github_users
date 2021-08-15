import { pxToRem } from '../../utils/pxToRem';

const {makeStyles} = require('@material-ui/core');
const useStyles = makeStyles(theme => ({
    root: {
        marginRight:pxToRem(10)
    },
    container: {
        padding: pxToRem(3),
        flexGrow: 1
    },
    paper: {
        backgroundColor: theme.palette.background.default,
    },
    titleContainer: {
        display: 'flex',
        flexWrap: 'nowrap'
    },
    title: {
        flexGrow: 1,
        fontWeight: 500,
        letterSpacing: pxToRem(0.2)
    },
    searchContainer: {
        position: 'relative',
        width:'100%',
        boxSizing:'border-box',
        // overflow: 'hidden',
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
    searchBar: {},
    preloader: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        left: 0,
        right:0
    },

}));

export default useStyles;
