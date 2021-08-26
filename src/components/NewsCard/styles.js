import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
    media: {
        height: '250px'
    },

    border: {
        border: 'solid',
    },

    grid: {
        display: 'flex',
    },

    fullHeightCard: {
        height: '100%',
    },

    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderBottom: '10px solid white',
    },

    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    },

    activeCard: {
        borderBottom: '10px solid #2C9EFF',
    },

    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
    },

    title: {
        padding: '0 16px',
    },


})