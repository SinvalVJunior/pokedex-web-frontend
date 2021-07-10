import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => {

    return {
        menuUserNotLogged: {
            display: 'inline',
            marginRight: '1rem',
            marginLeft: '0.5rem',
            color: 'white'

        },
        menuUserLogged: {
            display: 'inline',
            marginRight: '0.35rem',
            marginLeft: '0.5rem',
            color: 'white'

        },
        userLogo: {
            marginRight: '0.5rem',
            fontSize: '1.0rem',
            background: 'none',
            textDecoration: 'none'
        },
        button: {
            background: theme.palette.primary.main,
            borderRadius: 3,
            border: 0,
            color: 'white',
            height: 48,
            padding: '0 30px',
            "&:hover": {
                backgroundColor: theme.palette.primary.main
            },
        },
        buttonLabel: {
            textTransform: 'capitalize',
        },
        menuUserData: {
            display: 'block',
            marginRight: '1rem',
            marginLeft: '0.5rem',
            fontWeight: 'bold'
        },
        listData: {
            listStyleType: 'none'
        },
        userEditButton: {
            background: theme.palette.primary.main,
            borderRadius: 3,
            border: 0,
            color: 'white',
            height: 48,
            padding: '0 30px',
            "&:hover": {
                backgroundColor: theme.palette.primary.light
            }
        },
        userLoggoutButton: {
            marginRight: '0.5rem',
            fontSize: '1.0rem',
            borderRadius: 3,
            border: 0,
            height: 48,
            backgroundColor: 'white',
            color: theme.palette.primary.main,
            padding: '0 30px'
        },
    }
});