import { createTheme } from '@material-ui/core/styles';

import { pxToRem } from './utils/pxToRem';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Roboto',
            'sans-serif'
        ].join(','),
    },
    backgroundColorMessageWrap: '#DCDCDC',
    backgroundColorOwnerWindow: 'rgb(220, 248, 198)',
    colorTimeChat: 'green',
    overrides: {
        MuiCssBaseline: {
            '@global': {
                'html': {
                    boxSizing: 'border-box',
                    width: '100%',
                    height: '100%'
                },
                'html, body': {
                    outline: 'none',
                },
                body: {
                    margin: '0 auto',
                },
                '#root': {
                    minHeight: '100%',
                    height: '100vh',
                    width:'100%',
                },
                ':focus': {
                    outline: 'none'
                },
                a: {
                    textDecoration: 'none !important',
                },
            },
        },
        MuiFormLabel: {
            root: {
                '&.Mui-disabled': {
                    color: ' rgba(0, 0, 0, 0.54)'
                }
            },
            asterisk: {
                display: 'none'
            }
        },
        MuiFormHelperText: {
            root: {
                minHeight: pxToRem(22),
                position: 'absolute',
                bottom: pxToRem(-24),
                left: pxToRem(-10)
            }
        },
        MuiInputBase: {
            root: {
                position: 'relative',
                '&.Mui-disabled': {
                    color: 'initial'
                }
            }
        },
        MuiButton: {
            root: {
                textTransform: 'none',
                fontSize: pxToRem(16),
            }
        },
        outlined: {
            fontSize: pxToRem(16),
            border: `2px `,
        }
    },
    MuiOutlinedInput: {
        notchedOutline: {
            top: pxToRem(-4.5),
        }
    },
    'MuiGrid-spacing-xs-2':{
        margin: 0
    }
});

export default theme;
