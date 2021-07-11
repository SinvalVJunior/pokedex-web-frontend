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
        saveButton: {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            background: theme.palette.primary.main,
            borderRadius: 3,
            border: 0,
            color: 'white',
            height: 48,
            padding: '0 30px',
            margin: '50px'
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
        modalPaper: {
            position: 'absolute',
            width: 800,
            height: 600,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(5, 10, 10),
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        },
        Icon: {
            position: 'absolute',
            top: '1%',
            left: '4%',
            width: 90,
            height: 90,
        },
        perfilTitle: {
            color: theme.palette.primary.main,
            fontFamily: 'Pokemon'   
        },
        closeSpace: {
            margin: '0px',
            padding: '2px'
        }
     
    }
});