import { pxToRem } from '../../utils/pxToRem';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        minWidth: pxToRem(600),
        flexWrap: 'nowrap',
        padding: `${pxToRem(120)} ${pxToRem(18)} ${pxToRem(50)} ${pxToRem(18)}`,
        [theme.breakpoints.down('md')]: {
            paddingLeft: pxToRem(8),
            paddingRight: pxToRem(8)
        },
    }
}));

export default useStyles;
