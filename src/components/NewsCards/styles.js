import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        width: '100%',
        height: '45vh',
        padding: '10%',
        borderRadius: '10px',
    },

    infoCard: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
    },

    container: {
        padding: '0 5%',
        width: '100%',
        margin: '0px'
    },
    container1: {
        padding: '0 5%',
        width: '100%',
        margin: '0px',
        minHeight: 'calc(100vh - 91px)'
    }


});