import { pxToRem } from '../../utils/pxToRem';

const {makeStyles} = require('@material-ui/core');
const useStyles = makeStyles(theme => ({
    container: {
        padding: pxToRem(18),
        // flexGrow:1,
    },
    paper: {
        backgroundColor: theme.palette.background.default,
    },
    title: {
        fontWeight: 500,
        letterSpacing: pxToRem(0.2)
    },
    searchBar: {
        margin:`${pxToRem(18)} ${pxToRem(36)} ${pxToRem(28)}`,
        marginLeft: pxToRem(36),
        marginRight: pxToRem(36),
    },
    bio:{
        paddingLeft:pxToRem(12)
    },
    large: {
        width: pxToRem(160),
        height: pxToRem(160),
    },
    preloader:{
        paddingLeft:pxToRem(40)
    }
}));

export default useStyles;
