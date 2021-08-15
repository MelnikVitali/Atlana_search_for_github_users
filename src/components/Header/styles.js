import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(1),
        },
        marginBottom: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
    },
    toolBar: {
        width: '100%',
        height:'100%',
        display: 'flex',
    },
    menuButton: {
        paddingLeft: theme.spacing(4),
    },
}));

export default useStyles;
