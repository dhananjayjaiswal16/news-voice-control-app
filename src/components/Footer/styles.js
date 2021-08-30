import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    footer: {
        textAlign: 'center',
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '120px',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    link: {
        textDecoration: 'none',
        color: 'rgba(21, 101, 192)',
    },
}))