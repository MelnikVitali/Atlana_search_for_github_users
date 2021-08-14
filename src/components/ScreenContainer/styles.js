import { pxToRem } from '../../utils/pxToRem';

const {makeStyles} = require('@material-ui/core');

const useStyles = makeStyles(theme => ({
    container: {
        // minWidth: pxToRem(340),
        width:'100%',
        // justifyContent: 'center',
        flexWrap: 'nowrap',
        padding: `${pxToRem(120)} ${pxToRem(12)} ${pxToRem(50)} ${pxToRem(12)}`,
        [theme.breakpoints.down('md')]: {
            paddingLeft: pxToRem(8),
            paddingRight: pxToRem(8)
        },
    }
}));

export default useStyles;
